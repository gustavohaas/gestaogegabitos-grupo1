import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GroupsAddContext, ProviderGroup } from "../../providers/GroupsAdd";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ButtonContainer } from "./style";
import CustomPopup from "../../components/CustomPopup";

const GroupsAdd = ({ popupCloseHandler, visibility }) => {
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
    popupCloseHandler();
  };

  return (
    <CustomPopup onClose={popupCloseHandler} show={visibility} title={""}>
      <Container>
        <h1>Criar grupo</h1>
        <form onSubmit={handleSubmit(handleAddGroup)}>
          <Input
            label="name"
            register={register}
            error={!!errors.title}
            errorMsg={errors.title?.message}
            name="name"
            placeholder="Nome do grupo"
          />
          <Input
            label="description"
            register={register}
            error={!!errors.description}
            errorMsg={errors.description?.message}
            name="description"
            placeholder="Descrição do grupo"
          />
          <div>
            <span>Categoria:</span>
            <select {...register("category")}>
              <option value="saude">Saúde</option>
              <option value="hobby">Hobby</option>
              <option value="estudo">Estudos</option>
              <option value="Culinariay">Outros</option>
            </select>
          </div>
          <div>
            <Button type="submit">Adicionar</Button>
            <Button
              type="button"
              className="cancelButton"
              onClick={handleCancel}
            >
              Fechar
            </Button>
          </div>
        </form>
      </Container>
    </CustomPopup>
  );
};

export default GroupsAdd;
