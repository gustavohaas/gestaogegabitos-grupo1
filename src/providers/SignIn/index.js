import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5Njc2MzEyLCJqdGkiOiJkMWQ0ZjAzMWRhMjY0MTc3ODkzYzYxYzg3ZTUwY2Y5ZSIsInVzZXJfaWQiOjkzfQ.Wm-v13rpYHda150FlUmIDjMhnlVl9irb-tRsML1rCjg";

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);

  const signIn = (data) => {
    api
      .post("/sessions/", data)
      .then((_) => {
        history.push("/dashboard");
        toast.success(`Seja bem vindo ${data.username}`);
      })
      .catch((error) => console.log("ddd", error));
  };
  //Falta adicionar toast com "usuário ou senha inválidos"
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
