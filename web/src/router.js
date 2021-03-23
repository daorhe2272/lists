import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import page components
import SignMenu from "./pages/signMenu";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Settings from "./pages/settings";

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignMenu} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Pages;
