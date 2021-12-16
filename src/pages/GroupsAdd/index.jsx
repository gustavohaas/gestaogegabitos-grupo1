import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GroupsAddContext, ProviderGroup } from "../../providers/GroupsAdd";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "../../components/Input/style";

const GroupsAdd = () => {
  const { createGroup } = ProviderGroup(GroupsAddContext);

  const schema = yup.object().shape({
    name: yup.string().max(50, "ver com pessoal a mendagem"),
    description: yup.string().max(50, "ver com pessoal a mendagem"),
    category: yup.string().max(50, "ver com pessoal a mendagem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddGroup = (data) => {
    console.log(data);
    const newGroup = {
      name: data.name,
      description: data.description,
      category: data.category,
    };
    createGroup(newGroup);
  };

  const handleCancel = () => {
    //Somente fecha o popup
  };

  return (
    <Container>
      <Header />
      <Menu />
      <h1>Criar Grupo</h1>
      <form onSubmit={handleSubmit(handleAddGroup)}>
        <Input
          label="name"
          register={register}
          error={!!errors.title}
          errorMsg={errors.title?.message}
          name="name"
        />
        <Input
          label="description"
          register={register}
          error={!!errors.description}
          errorMsg={errors.description?.message}
          name="description"
        />
        <div>
          Escolha uma Categoria
          <select {...register("category")}>
            <option value="saude">Saude</option>
            <option value="hobby">Hobby</option>
            <option value="estudo">Estudo</option>
            <option value="Culinariay">Culinaria</option>
          </select>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
      <Button onClick={handleCancel}>Cancelar</Button>
    </Container>
  );
};

export default GroupsAdd;
