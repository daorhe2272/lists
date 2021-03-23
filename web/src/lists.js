import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalStyle from "./components/GlobalStyle";

import Pages from "./router";

require("dotenv").config();

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();

// Configure Apollo Client
const client = new ApolloClient({
  uri,
  cache,
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
