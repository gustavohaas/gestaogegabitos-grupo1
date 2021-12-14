import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";
import { HabitProvider } from "./Habits";
import GroupsActivitiesProvider from "./GroupsActivities";

const Providers = ({ children }) => {
  return (
    <GroupsActivitiesProvider>
      <HabitProvider>
        <DashboardProvider>
          <SignInProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </SignInProvider>
        </DashboardProvider>
      </HabitProvider>
    </GroupsActivitiesProvider>
  );
};

export default Providers;
