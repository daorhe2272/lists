const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  privateInfo: {
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    hash: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    createdOn: {
      type: Number,
      default: Date.now(),
      min: 0
    },
    lastLogin: {
      type: Number,
      min: 0
    }
  }
});
const User = mongoose.model("User", UserSchema);

module.exports = {
  User
};
