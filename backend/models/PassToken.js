const mongoose = require("mongoose");

const passTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

module.exports = PassToken = mongoose.model("passToken", passTokenSchema);
