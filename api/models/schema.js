const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): String!
    signIn(email: String!, password: String!): String!
  }
`;
