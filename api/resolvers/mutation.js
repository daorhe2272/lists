const mongoose = require("mongoose");
const crypto = require("crypto");

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
  }
};
