import FirstStep from "./pages/FirstStep";
import { Box } from "@mui/material";
import { AppText } from "./components";
import "./App.css";

function App() {
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
      <FirstStep />
    </Box>
  );
}

export default App;
