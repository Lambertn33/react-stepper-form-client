import { useRef } from "react";
import { AppTextField, AppButton, AppCard } from "../components";

const FirstStep = () => {

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);


  return (
    <AppCard>
      <AppTextField label="First Name" ref={firstNameRef} />
      <AppTextField label="Last Name" ref={lastNameRef} />
      <AppTextField label="Email" ref={emailRef} />
      <AppTextField label="Phone" ref={phoneRef} />
      <AppButton color="primary" label="Continue" type="button" />
    </AppCard>
  );
};

export default FirstStep;
