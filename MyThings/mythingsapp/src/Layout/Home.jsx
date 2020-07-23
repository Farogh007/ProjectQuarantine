import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import LandingPage from "../Pages/Landing/Landing";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const Home = () => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {authState.isAuthenticated && (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Dashboard />
          </Container>
        </React.Fragment>
      )}

      {!authState.isAuthenticated && (
        <div>
          <LandingPage />
        </div>
      )}
    </div>
  );
};
export default Home;
