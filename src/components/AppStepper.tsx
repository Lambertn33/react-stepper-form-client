import { useContext } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { UsersContext } from "../context/UsersContext";

export const AppStepper = () => {
  const { currentStep } = useContext(UsersContext);
  const totalSteps = 3;

  const steps = [];
  for (let stepIndex = 0; stepIndex < totalSteps; stepIndex++) {
    steps.push(
      <Step key={stepIndex}>
        <StepLabel></StepLabel>
      </Step>
    );
  }

  return <Stepper activeStep={currentStep}>{steps}</Stepper>;
};
