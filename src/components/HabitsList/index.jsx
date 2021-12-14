import { Container } from "./styles";
import SearchInput from "../SearchInput";

//icons
import { GoSearch } from "react-icons/go";

const HabitsList = () => {
  const habits = 0;

  return (
    <Container>
      <SearchInput icon={GoSearch} name="search" className="searchInput" />
      {habits > 0 ? (
        <p>Aqui vai um card para cada hábito</p>
      ) : (
        <p>Você ainda não possui nenhum hábito cadastrado.</p>
      )}
    </Container>
  );
};

export default HabitsList;
