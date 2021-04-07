import React from "react";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

// Import page components
import SignMenu from "./pages/signMenu";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Settings from "./pages/settings";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/authentication",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/authentication" component={SignMenu} />
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/settings" component={Settings} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Pages;
