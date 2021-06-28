const express = require("express");
const jwt = require("jsonwebtoken");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
require("dotenv").config();

const db = require("./models/db");
const models = require("./models/models");
const typeDefs = require("./models/schema");
const resolvers = require("./resolvers/index");

const app = express();

// Allow only requests coming from front-end server for production
app.use(cors());

const getUser = (token) => {
  if (token) {
    try {
      // Return user info from the token
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error("Invalid session");
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user };
  }
});
server.applyMiddleware({ app, path: "/gql" })

const port = process.env.PORT || 4000;
app.listen(port);
