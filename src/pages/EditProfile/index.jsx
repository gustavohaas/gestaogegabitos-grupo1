import Header from "../../components/Header";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EditProfile = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const updateUserData = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <h2>Minha conta</h2>
        </div>
        <form onSubmit={handleSubmit(updateUserData)}>
          <label for="name">
            Nome <span>{errors.name?.message}</span>
          </label>
          <Input icon={FiUser} name="name" register={register} />
          <label for="email">
            Email <span>{errors.email?.message}</span>
          </label>
          <Input icon={FiMail} name="email" register={register} />
          <label for="password">
            Senha <span>{errors.password?.message}</span>
          </label>
          <Input
            icon={FiLock}
            name="password"
            type="password"
            register={register}
          />
          <Button type="submit">Atualizar dados</Button>
        </form>
      </Container>
      <Menu />
    </>
  );
};

export default EditProfile;
