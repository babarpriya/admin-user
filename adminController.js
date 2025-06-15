const User = require('../models/User');
const Blog = require('../models/Blog');
const Comment = require('../models/comment');

exports.getUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');
  res.json(users);
};

exports.blockUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { blocked: true });
  res.json({ message: 'User blocked' });
};

exports.filterCommentStatus = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');
  const result = await Promise.all(users.map(async (u) => {
    const count = await Comment.countDocuments({ 'commenter.id': u._id });
    return { user: u, commented: count > 0 };
  }));
  res.json(result);
};

exports.filterBlogStatus = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');
  const result = await Promise.all(users.map(async (u) => {
    const count = await Blog.countDocuments({ 'author.id': u._id });
    return { user: u, hasBlogs: count > 0 };
  }));
  res.json(result);
};



