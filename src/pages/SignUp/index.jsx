import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSignUp } from "../../providers/SignUp";
import { Link, useHistory } from "react-router-dom";
import { Container } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const SignUp = () => {
  const { signup } = useSignUp();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Digite ao menos 3 caracteres")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
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
    <Container>
      <div>
        <h2>Cadastre-se</h2>
      </div>

      <form onSubmit={handleSubmit(handleForm)}>
        <label for="username">
          Usuário <span>{errors.username?.message}</span>
        </label>
        <Input icon={FiUser} name="username" register={register} />
        <label for="name">
          Email <span>{errors.email?.message}</span>
        </label>
        <Input icon={FiMail} name="email" register={register} />
        <label for="password">
          Senha <span>{errors.password?.message}</span>
        </label>
        <Input
          icon={FiLock}
          name="password"
          register={register}
          type="password"
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <div className="BtnSignUp">
        <span> Já possui uma conta?</span>
        <Link to="/signup">Clique aqui</Link>
      </div>
    </Container>
  );
};

export default SignUp;
