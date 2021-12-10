import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const signup = (data, history) => {
    console.log(data);
    api
      .post("users/", data)
      .then((res) => {
        console.log(res);
        toast.success("cadastro sucess!");
        history.push("/login");
      })
      .catch((e) => toast.error("desculpe houve uma falha"));
  };
  return (
    <SignUpContext.Provider
      value={{
        signup,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
export const useSignUp = () => useContext(SignUpContext);
