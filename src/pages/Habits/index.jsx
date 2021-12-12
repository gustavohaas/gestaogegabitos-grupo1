import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProviderHabit, HabitsContext } from "../../providers/Habits";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Container from "./style.js";

const Habits = () => {
  const { createHabit } = ProviderHabit(HabitsContext);
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
  } = useForm({ resolver: yupResolver(schema) });
  const handleAddHabit = (data) => {
    const newHabit = {
      title: data.title,
      category: data.category,
      difficulty: data.difficulty,
      frequency: data.frequency,
      achieved: false,
      how_much_achieved: 0,
      user: 93,
    };
    createHabit(newHabit);
  };
  const handleCancel = () => {
    //Somente fecha o popup
  };
  return (
    <Container>
      <h1>Criar Hábito</h1>
      <form onSubmit={handleSubmit(handleAddHabit)}>
        <Input
          label="Título"
          register={register}
          error={!!errors.title}
          errorMsg={errors.title?.message}
          name="title"
        />
        <Input
          label="Frequencia"
          register={register}
          error={!!errors.frequency}
          errorMsg={errors.frequency?.message}
          name="frequency"
        />
        <div>
          Escolha uma Categoria
          <select {...register("category")}>
            <option value="category">Saude</option>
            <option value="category">Hobby</option>
            <option value="category">Estudo</option>
            <option value="category">Culinaria</option>
          </select>
        </div>
        <div>
          Qual à dificuldade?
          <select {...register("difficulty")}>
            <option value="difficulty">Fácil</option>
            <option value="difficulty">Média</option>
            <option value="difficulty">Díficil</option>
            <option value="difficulty">Muito Díficil</option>
          </select>
        </div>
        <div>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
      <Button onClick={handleCancel}>Cancelar</Button>
    </Container>
  );
};
export default Habits;
