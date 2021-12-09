import { SignUpProvider } from "./SignUp";
import SignInProvider from "./SignIn";

const Providers = ({children}) => {
    return (
        <SignInProvider>
          <SignUpProvider>
            {children}
          </SignUpProvider>
        </SignInProvider>
    )
}

export default Providers;