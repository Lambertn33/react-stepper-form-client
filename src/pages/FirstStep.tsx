import { useState, useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { AppTextField, AppButton, AppCard } from "../components";

export const FirstStep = () => {
  const { setStep, setUserData, userData, setUserServerErrors } = useContext(UsersContext);

  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [lastName, setLastName] = useState(userData.lastName || "");
  const [email, setEmail] = useState(userData.email || "");
  const [phone, setPhone] = useState(userData.phone || "");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    isValidEmail(email) &&
    phone.trim() !== "";

  const handleContinue = () => {
    setUserData({
      ...userData,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });
    setUserServerErrors([]);
    setStep(2);
  };

  return (
    <AppCard>
      <AppTextField
        type="text"
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <AppTextField
        type="text"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <AppTextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AppTextField
        type="number"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <AppButton
        onClick={handleContinue}
        color="primary"
        label="Continue"
        type="button"
        disabled={!isValid}
      />
    </AppCard>
  );
};