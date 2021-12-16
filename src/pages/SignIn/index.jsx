import { Container } from "./style.js";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiUser, FiLock } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useEffect } from "react";
import { SignInContext } from "../../providers/SignIn";

import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const { isAuth, setIsAuth, signIn, toSignUp } = useContext(SignInContext);

  let history = useHistory();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];

    if (!token !== [] && !isAuth === true) {
      history.push("/dashboard");
    }
  }, [history, isAuth]);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = (data) => {
    signIn(data);
  };

  return (
    <Container>
      <div>
        <h2>Login</h2>
      </div>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <label for="username">
          Usuário <span>{errors.username?.message}</span>
        </label>
        <Input icon={FiUser} name="username" register={register} />
        <label for="password">
          Senha <span>{errors.password?.message}</span>
        </label>
        <Input
          icon={FiLock}
          name="password"
          register={register}
          type="password"
        />
        <Button type="submit">Entrar</Button>
      </form>

      <div className="BtnSignUp">
        <span>Ainda não possui uma conta?</span>
        <Link to="/signup">Cadastre-se</Link>
      </div>
    </Container>
  );
};

export default SignIn;
