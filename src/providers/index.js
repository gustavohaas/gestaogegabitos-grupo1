import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import { HabitProvider } from "./Habits";
import HabitCardProvider from "./HabitCard";

const Providers = ({ children }) => {
  return (
    <HabitCardProvider>
      <HabitProvider>
        <DashboardProvider>
          <SignInProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </SignInProvider>
        </DashboardProvider>
      </HabitProvider>
    </HabitCardProvider>
  );
};

export default Providers;
