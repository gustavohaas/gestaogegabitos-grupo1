import { SignUpProvider } from "./SignUp";

const Providers = ({ children }) => {
  return (
    <>
      <SignUpProvider>{children}</SignUpProvider>
    </>
  );
};

export default Providers;
