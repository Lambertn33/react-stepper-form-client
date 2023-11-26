import { createContext, useState, FC, ReactNode, useEffect } from "react";

import { GET } from "../api/api";
import { UserInterface, UserContextInterface } from "../interfaces";

export const UsersContext = createContext<UserContextInterface>({
  currentStep: 1,
  loading: false,
  users: [],
  error: null,
  setStep: (_step: number) => {},
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courses: [],
  },
  addUser: (_newUser: UserInterface) => {},
  setUserData: (
    _userData: UserInterface | ((prevUserData: UserInterface) => UserInterface)
  ) => {},
});
const UsersContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [userData, setUserData] = useState<UserInterface>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courses: [],
  });

  // fetch initial users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await GET();
        setUsers(response.users);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // set step
  const setStep = (step: number) => setCurrentStep(step);

  // append user
  const addUser = (data: UserInterface) => {
    setUsers((prevState) => {
      return [...prevState, data]
    })
  }

  const contextValue: UserContextInterface = {
    currentStep,
    error,
    loading,
    users,
    setStep,
    userData,
    addUser,
    setUserData,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
