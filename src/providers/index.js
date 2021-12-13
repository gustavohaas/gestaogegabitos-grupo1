import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import { HabitProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <SignInProvider>
      <HabitProvider>
        <SignUpProvider>{children}</SignUpProvider>
      </HabitProvider>
    </SignInProvider>
  );
};

export default Providers;
