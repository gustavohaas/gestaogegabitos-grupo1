import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import ProgressProvider from "./Progress";
import { HabitProvider } from "./Habits";
import { GroupsAddProvider } from "./GroupsAdd";

const Providers = ({ children }) => {
  return (
    <GroupsAddProvider>
      <HabitProvider>
        <ProgressProvider>
          <DashboardProvider>
            <SignInProvider>
              <SignUpProvider>{children}</SignUpProvider>
            </SignInProvider>
          </DashboardProvider>
         </ProgressProvider>
        </HabitProvider>
    </GroupsAddProvider>
  );
};

export default Providers;
