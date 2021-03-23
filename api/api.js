const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const db = require("./models/db");
const models = require("./models/models");
const typeDefs = require("./models/schema");
const resolvers = require("./resolvers/index");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return { models };
  }
});
server.applyMiddleware({ app, path: "/gql" })

const port = process.env.PORT || 4000;
app.listen(port);
