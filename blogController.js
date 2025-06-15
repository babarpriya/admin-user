const Blog = require('../models/Blog');
const Comment = require('../models/comment');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  const blog = new Blog({
    title,
    content,
    imageUrl,
    author: { id: req.user.id, role: req.user.role }
  });
  await blog.save();
  res.status(201).json(blog);
};

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

exports.searchBlogs = async (req, res) => {
  const { q } = req.query;
  const blogs = await Blog.find({ title: new RegExp(q, 'i') });
  res.json(blogs);
};

exports.postComment = async (req, res) => {
  const { text } = req.body;
  const comment = new Comment({
    blogId: req.params.blogId,
    commenter: { id: req.user.id, name: req.user.name },
    text
  });
  await comment.save();
  res.status(201).json(comment);
};

exports.getComments = async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  if (blog.author.id.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not blog owner' });
  }

  const comments = await Comment.find({ blogId: blog._id }).sort({ createdAt: -1 });
  res.json(comments);
};



