import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSignUp } from "../../providers/SignUp";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../components/Logo";
import { Errors, Footer, Form, Span } from "./style";

const SignUp = () => {
  const { signup } = useSignUp();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Mínimo de 3 letras")
      .max(12, "máximo de 12 letras"),
    email: yup.string().email("E-mail inválido"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    signup(data, history);
  };

  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input name="username" placeholder="Usuário" register={register} />
        <Errors> {errors.username?.message}</Errors>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          register={register}
        />
        <Errors>{errors.email?.message}</Errors>
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          register={register}
        />
        <Errors>{errors.password?.message}</Errors>
        <Button type="submit">Cadastrar</Button>
        <Footer>
          Já está cadastrado?
          <Span>
            <Link to="/login">Login</Link>
          </Span>
        </Footer>
      </Form>
    </>
  );
};

export default SignUp;
