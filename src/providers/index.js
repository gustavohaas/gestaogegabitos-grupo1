import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";
import DashboardProvider from "./Dashboard";

const Providers = ({ children }) => {
  return (
    <DashboardProvider>
      <SignInProvider>
        <SignUpProvider>{children}</SignUpProvider>
      </SignInProvider>
    </DashboardProvider>
  );
};

export default Providers;
