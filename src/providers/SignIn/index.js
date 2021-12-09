import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);

  const signIn = (data) => {
    api.post("sessions/", data).then((_) => {
      history.push("/dashboard");
      toast.success(`Seja bem vindo ${data.username}`);
    });
  };

  const toSignUp = () => {
    history.push("/signup");
  };
  return (
    <SignInContext.Provider value={{ signIn, toSignUp }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;
