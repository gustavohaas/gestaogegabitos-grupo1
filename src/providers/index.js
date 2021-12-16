import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import ProgressProvider from "./Progress";
import { HabitProvider } from "./Habits";
import { GroupsAddProvider } from "./GroupsAdd";
import GoalsProvider from "./Goals";

const Providers = ({ children }) => {
  return (
    <GoalsProvider>
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
    </GoalsProvider>
  );
};

export default Providers;
