const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Model Schema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create User Model with Schema
const User = mongoose.model('User', UserSchema);

module.exports = { User };