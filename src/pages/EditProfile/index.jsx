import Header from "../../components/Header";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { FiMail, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { SignInContext } from "../../providers/SignIn";

import api from "../../services/api";

const EditProfile = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { userId } = useContext(SignInContext);
  console.log(userId);
  const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];
  console.log(token);

  const updateUserData = (data) => {
    console.log(data);
    api.patch(`/users/${userId}/`);
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
          <Button type="submit">Atualizar dados</Button>
        </form>
      </Container>
      <Menu />
    </>
  );
};

export default EditProfile;
