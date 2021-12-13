import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import { HabitProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <HabitProvider>
      <DashboardProvider>
        <SignInProvider>
          <SignUpProvider>{children}</SignUpProvider>
        </SignInProvider>
      </DashboardProvider>
    </HabitProvider>
  );
};

export default Providers;
