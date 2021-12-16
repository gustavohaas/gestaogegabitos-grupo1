import { Container } from "./styles";
import SearchInput from "../SearchInput";

//icons
import { GoSearch } from "react-icons/go";
import { useContext, useState } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import HabitCard from "../HabitCard";

const HabitsList = () => {
  const { addHowMuch, searchHabit, list } = useContext(DashboardContext);

  const habits = list.length;

  console.log(list);
  return (
    <Container>
      <SearchInput
        icon={GoSearch}
        name="search"
        className="searchInput"
        onChange={(e) => searchHabit(e.target.value)}
      />
      {habits > 0 ? (
        list.map((iten) => (
          <HabitCard key={iten.id} addHowMuch={addHowMuch}>
            {iten}
          </HabitCard>
        ))
      ) : (
        <p>Você ainda não possui nenhum hábito cadastrado.</p>
      )}
    </Container>
  );
};

export default HabitsList;
