import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/SignUp";
import { useHistory, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const { signup, isAuth } = useAuth();
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

  const handleForm = ({ username, email, password }) => {
    const user = { username, email, password };

    signup(user, history);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input placeholder="Usuário" {...register("username")} />
        <p>error={errors.username?.message}</p>
        <Input placeholder="Email" {...register("email")} />
        <p>error={errors.email?.message}</p>
        <Input placeholder="Senha" {...register("password")} />
        <p>error={errors.password?.message}</p>
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
};

export default SignUp;
