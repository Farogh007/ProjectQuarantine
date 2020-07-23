import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Container from "@material-ui/core/Container";
import config from "./config";
import Home from "../src/Layout/Home";
import LoginPage from "../src/Pages/Login/Login";
import Profile from "../src/Pages/Profile/Profile";
import Navbar from "../src/Components/Navbar/MyNavbar";
import DeviceData from "../src/Pages/DeviceData/DeviceData";

const HasAccessToRouter = () => {
  const history = useHistory(); // example from react-router

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };

  return (
    <Security {...config.oidc} onAuthRequired={customAuthHandler}>
      <Navbar />
      <Container text style={{ marginTop: "2em" }}>
        <Route path="/" exact component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/login" component={LoginPage} />
        <SecureRoute path="/profile" component={Profile} />
        <SecureRoute path="/data" component={DeviceData} />
      </Container>
    </Security>
  );
};

const App = () => (
  <div>
    <Router>
      <HasAccessToRouter />
    </Router>
  </div>
);

export default App;
