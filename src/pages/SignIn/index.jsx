import { Container } from "./style.js";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SignInContext } from "../../providers/SignIn";

const SignIn = () => {
  const { signIn, toSignUp } = useContext(SignInContext);
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

  const handleClick = () => {
    toSignUp();
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h5>Usuário</h5>
        <Input placeholder="Usuário" name="username" register={register} />
        <p>{errors.username?.message}</p>
        <h5>Senha</h5>
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          register={register}
        />
        <p>{errors.password?.message}</p>
        <Button type="submit">Entrar</Button>
      </form>
      <div className="BtnSignUp">
        <span>Ainda não possui uma conta?</span>
        <button onClick={handleClick}>Cadastre-se</button>
      </div>
    </Container>
  );
};

export default SignIn;
