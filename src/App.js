import Routes from "./pages/routes";
import SignInProvider from "./providers/SignIn";

function App() {
  return (
    <div className="App">
      <SignInProvider>
        <Routes />
      </SignInProvider>
    </div>
  );
}

export default App;
