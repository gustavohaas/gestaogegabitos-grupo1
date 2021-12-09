import SignInProvider from "./SignIn";


const Providers = ({children}) => {
    return (
        <SignInProvider>
            {children}
        </SignInProvider>
    )
}

export default Providers;