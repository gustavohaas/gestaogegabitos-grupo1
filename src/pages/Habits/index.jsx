import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HabitProvider, HabitsContext } from "../../providers/Habits";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Container from "./style.js";
import { useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import { SignInContext } from "../../providers/SignIn";
import CustomPopup from "../../components/CustomPopup";

const Habits = ({ popupCloseHandler, visibility }) => {
  const { addHabit } = useContext(DashboardContext);
  const { userId } = useContext(SignInContext);

  const schema = yup.object().shape({
    title: yup.string().max(50, "ver com pessoal a mensagem"),
    frequency: yup.string().max(50, "ver com pessoal a mensagem"),
    category: yup.string().max(50, "ver com pessoal a mensagem"),
    difficulty: yup.string().max(50, "ver com pessoal a mensagem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddHabit = (data) => {
    console.log(userId);
    const newHabit = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: userId, // Aqui estamos passando um user fixo, precisamos passar o id do usuário logado. Usar biblioteca jwt-decoded
    };
    addHabit(newHabit);
    reset();
  };
  const handleCancel = () => {
    popupCloseHandler();
  };

  return (
    <CustomPopup onClose={popupCloseHandler} show={visibility} title={""}>
      <Container>
        <h1>Cadastrar hábito</h1>
        <form onSubmit={handleSubmit(handleAddHabit)}>
          <Input
            label="Título"
            register={register}
            error={!!errors.title}
            errorMsg={errors.title?.message}
            name="title"
            placeholder="Título"
          />
          <div>
            <span>Frequência:</span>
            <select name="frequency" {...register("frequency")}>
              <option value="Diária">Diária</option>
              <option value="Semanal">Semanal</option>
              <option value="Mensal">Mensal</option>
            </select>
          </div>
          <div>
            <span>Categoria:</span>
            <select name="category" {...register("category")}>
              <option value="Saúde">Saúde</option>
              <option value="Hobby">Hobby</option>
              <option value="Estudo">Estudos</option>
              <option value="Culinária">Outros</option>
            </select>
          </div>
          <div>
            <span>Dificuldade:</span>
            <select name="difficulty" {...register("difficulty")}>
              <option value="Fácil">Fácil</option>
              <option value="Média">Média</option>
              <option value="Difícil">Difícil</option>
              <option value="Muito Difícil">Muito Difícil</option>
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
export default Habits;
