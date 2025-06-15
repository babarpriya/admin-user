const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  commenter: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String
  },
  text: String
}, { timestamps: true });
module.exports = mongoose.model('Comment', commentSchema);


