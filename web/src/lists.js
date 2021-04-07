import React from 'react';
import ReactDOM from 'react-dom';
import { setContext } from "apollo-link-context";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";

import { cache } from "./cache";
import GlobalStyle from "./components/GlobalStyle";

import Pages from "./router";

require("dotenv").config();

const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });

// Check for a token and return the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || ""
    }
  };
});

// Configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
