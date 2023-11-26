export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courses: string[];
}

export interface UserContextInterface {
    users: UserInterface[];
    loading: boolean;
    error: Error | null | unknown;
    currentStep: number;
    setStep: (step: number) => void;
    userData: UserInterface;
    setUserData: (userData: UserInterface | ((prevUserData: UserInterface) => UserInterface)) => void;
    addUser: (newUser: UserInterface) => void;
  }
