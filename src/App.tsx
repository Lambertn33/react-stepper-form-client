import { FirstStep, SecondStep, Review } from "./pages";
import { Box } from "@mui/material";
import { AppText } from "./components";
import "./App.css";

function App() {
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
      {showCurrentStep(1)}
    </Box>
  );
}

export default App;
