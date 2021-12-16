import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@Habitactics:user_id")) || ""
  );

  // const [decoded, setDecoded] = useState({});

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];

    if (!token) {
      return setIsAuth(false);
    } else {
      return setIsAuth(true);
    }
  }, [isAuth]);

  const signIn = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;
        const { user_id } = jwt_decode(access);
        setUserId(user_id);
        localStorage.setItem(
          "@Habitactics:token",
          JSON.stringify(access) || []
        );
        localStorage.setItem(
          "@Habitactics:user_id",
          JSON.stringify(user_id) || []
        );
        localStorage.setItem(
          "@Habitactics:username",
          JSON.stringify(data.username) || []
        );
        history.push("/dashboard");
        toast.success(`Seja bem vindo ${data.username}`);
      })
      .catch((error) => toast.error("Usuário ou senha inválidos"));
  };

  // const { user_id } = decoded;
  // useEffect(() => {
  //   setUserId(user_id);
  // }, []);

  const toSignUp = () => {
    history.push("/signup");
  };

  return (
    <SignInContext.Provider value={{ isAuth, setIsAuth, signIn, toSignUp, userId }}>
      {children}
    </SignInContext.Provider>
  );
};
export default SignInProvider;
