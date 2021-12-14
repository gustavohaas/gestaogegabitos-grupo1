import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { HabitCardContext } from "../HabitCard";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [decoded, setDecoded] = useState({});

  const { seekHabits } = useContext(HabitCardContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];

    if (!token) {
      return setIsAuth(false);
    } else {
      setDecoded(jwt_decode(token)); // comentar se der erro: para consiguir logar
      return setIsAuth(true);
    }
  }, [isAuth]);

  const signIn = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem(
          "@Habitactics:token",
          JSON.stringify(access) || []
        );
        seekHabits();
        history.push("/dashboard");
        toast.success(`Seja bem vindo ${data.username}`);
        setUserName(data.username);
      })
      .catch((error) => toast.error("Usuário ou senha inválidos"));
  };
  // console.log(decoded);

  const { user_id } = decoded;
  useEffect(() => {
    setUserId(user_id);
  }, []);

  // console.log(user_id);

  const toSignUp = () => {
    history.push("/signup");
  };

  return (
    <SignInContext.Provider value={{ signIn, toSignUp, userId, userName }}>
      {children}
    </SignInContext.Provider>
  );
};
export default SignInProvider;
