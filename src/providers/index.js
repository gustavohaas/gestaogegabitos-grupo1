import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import { HabitProvider } from "./Habits";
import { GroupsAddProvider } from "./GroupsAdd";

const Providers = ({ children }) => {
  return (
    <GroupsAddProvider>
      <HabitProvider>
        <DashboardProvider>
          <SignInProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </SignInProvider>
        </DashboardProvider>
      </HabitProvider>
    </GroupsAddProvider>
  );
};

export default Providers;
