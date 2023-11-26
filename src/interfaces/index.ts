export interface UserInterface {
  id?: string;
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
  userServerErrors: { msg: string }[];
  userData: UserInterface;
  setStep: (step: number) => void;
  setUserData: (
    userData: UserInterface | ((prevUserData: UserInterface) => UserInterface)
  ) => void;
  setUserServerErrors: (errors: { msg: string }[]) => void;
  addUser: (newUser: UserInterface) => void;
}
