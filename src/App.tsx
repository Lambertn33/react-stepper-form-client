import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { UsersContext } from "./context/UsersContext";
import { Box } from "@mui/material";
import { AppText } from "./components";
import { FirstStep, SecondStep, Review, UsersList } from "./pages";

import "./App.css";

function App() {
  const { currentStep } = useContext(UsersContext);
  const showCurrentStep = (step: number) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <Review />;
      default:
        break;
    }
  };
  return (
    <Box>
      <Router>
        <Box display="flex" gap={2} justifyContent="center">
          <Link to="/">
            <AppText variant="subtitle1" text="Users List" />
          </Link>
          <Link to="/create">
            <AppText variant="subtitle1" text="Create New" />
          </Link>
        </Box>
        <Switch>
          <Route path="/" exact>
            <UsersList />
          </Route>
          <Route path="/create">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              height="100vh"
            >
              <AppText text="Sign up for a course now" variant="h5" />
              <AppText
                text="fill in the form and get access for our online courses for free"
                variant="subtitle1"
              />
              {showCurrentStep(currentStep)}
            </Box>
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
