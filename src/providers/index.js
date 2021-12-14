import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import ProgressProvider from "./Progress";
import { HabitProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <HabitProvider>
      <ProgressProvider>
        <DashboardProvider>
          <SignInProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </SignInProvider>
        </DashboardProvider>
      </ProgressProvider>
    </HabitProvider>
  );
};

export default Providers;
