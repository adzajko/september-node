const mongoose = require('mongoose');

const Post = mongoose.model('posts', {
  title: String,
  content: String,
  tags: [String],
  createdBy: { type: mongoose.Types.ObjectId }
});

module.exports = Post;
