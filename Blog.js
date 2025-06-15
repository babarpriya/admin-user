const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);


