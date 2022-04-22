const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  loginFails: {
    type: Number,
    required: false,
    default: 0,
  },
  accessToken: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = User = mongoose.model("user", userSchema);
