import {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courses: string[];
}

interface UserContextInterface {
  users: User[];
  loading: boolean;
  error: Error | null | unknown;
  currentStep: number;
  setStep: (step: number) => void;
  userData: User;
  setUserData: (userData: User | ((prevUserData: User) => User)) => void;
}

export const UsersContext = createContext<UserContextInterface>({
  currentStep: 1,
  loading: false,
  users: [],
  error: null,
  setStep: (step: number) => {},
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courses: [],
  },
  setUserData: (userData: User | ((prevUserData: User) => User)) => {},
});
const UsersContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [userData, setUserData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courses: [],
  });

  const setStep = (step: number) => setCurrentStep(step);

  const contextValue: UserContextInterface = {
    currentStep,
    error,
    loading,
    users,
    setStep,
    userData,
    setUserData,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
