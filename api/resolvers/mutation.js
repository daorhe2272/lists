const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { AuthenticationError } = require("apollo-server-express");

module.exports = {
  addUser: async (parent, { username, email, password }, { models }) => {
    let salt = crypto.randomBytes(16).toString("hex");
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    try {
      const user = await models.User.create({
        privateInfo: {
          email,
          username,
          salt,
          hash,
          createdOn: Date.now()
        }
      });
      return "User successfully created";
    } catch (err) {
      console.log(err);
      throw new Error(" API error: User could not be created.");
    }
  },

  signIn: async (parent, { email, password }, { models }) => {
    if (email) { email = email.trim().toLowerCase(); }

    // Retrieve user account
    const user = await models.User.findOne({ "privateInfo.email": email });
    if (!user) { throw new AuthenticationError("Email or password incorrect"); }

    // Check user's password
    const hash = crypto.pbkdf2Sync(password, user.privateInfo.salt, 1000, 64, "sha512").toString("hex");
    const valid = user.privateInfo.hash === hash;
    if (!valid) { throw new AuthenticationError("Email or password incorrect"); }
    return jwt.sign({ id: user._id}, process.env.JWT_SECRET);
  }
};
