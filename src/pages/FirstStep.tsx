import { useRef, useState } from "react";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { AppTextField, AppButton, AppCard } from "../components";

export const FirstStep = () => {
  const { setStep } = useContext(UsersContext);
  
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [isValid, setIsValid] = useState(false);

  const handleValidation = () => {
    const isFirstNameValid = firstNameRef.current?.value.trim() !== "";
    const isLastNameValid = lastNameRef.current?.value.trim() !== "";
    const isEmailValid = emailRef.current?.value.trim() !== "";
    const isPhoneValid = phoneRef.current?.value.trim() !== "";

    setIsValid(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid);
  };

  const handleContinue = () => {
    setStep(2);
  };

  return (
    <AppCard>
      <AppTextField label="First Name" innerRef={firstNameRef} onChange={handleValidation} />
      <AppTextField label="Last Name" innerRef={lastNameRef} onChange={handleValidation} />
      <AppTextField label="Email" innerRef={emailRef} onChange={handleValidation} />
      <AppTextField label="Phone" innerRef={phoneRef} onChange={handleValidation} />
      <AppButton onClick={handleContinue} color="primary" label="Continue" type="button" disabled={!isValid} />
    </AppCard>
  );
};