const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  fullname: { type: String },
  isAdmin: { type: Boolean, default: false },
  token: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
