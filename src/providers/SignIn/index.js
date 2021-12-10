import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(0);
  const [decoded, setDecoded] = useState({});

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);

  const signIn = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habitactics:token", JSON.stringify(access));
        setDecoded(jwt_decode(access));
        history.push("/dashboard");
        toast.success(`Seja bem vindo ${data.username}`);
      })
      .catch((error) => toast.error("Usuário ou senha inválidos"));
  };

  const toSignUp = () => {
    history.push("/signup");
  };
  return (
    <SignInContext.Provider value={{ signIn, toSignUp, userId }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;

//Falta conseguir o Id do usuário pelo jwt decodificado. Não entendi essa parte da doc