const mongoose = require('mongoose');

const User = mongoose.model('users', {
  username: {
    type: String,
    index: true,
    unique: true,
    required: ['Username is a required field!']
  },
  password: { type: String, required: ['Password is a required field!'] }
});

module.exports = User;
