import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const SignUpContext = createContext();

export const SignUp = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Dev:token"));
    if (token) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const signup = (data, history) => {
    api
      .post("users/", data)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        history.push("/login");
      })
      .catch((error) => toast.error("Usuário já existe."));
  };

  return (
    <SignUpContext.Provider
      value={{
        isAuth,
        signup,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
export const useAuth = () => useContext(SignUpContext);
