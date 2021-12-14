import { Container, IconButton } from "./style";
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import MiniButton from "../../components/MiniButon";
import { useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import { SignInContext } from "../../providers/SignIn";
import { HabitCardContext } from "../../providers/HabitCard";
import HabitCard from "../HabitCard";

const Dashboard = () => {
  const { deleteHabit, addHowMuch, searchHabit, achieveHabit, editHabit } = useContext(DashboardContext);
  const { userName } = useContext(SignInContext);
  const { habits, seekHabits } = useContext(HabitCardContext);

  return (
    <>
      <Container>
        <Header />
        <h2>Seja bem-vindo(a), {userName}!</h2>
        <nav>
          <div>
            <button className="day">Hoje</button>
            <button className="ellipsis">…</button>
          </div>
          <IconButton className="search">
            <GoSearch size="1.5em" />
          </IconButton>
        </nav>
        <main>
          <div className="tasks">
            {habits.length === 0 ? <button onClick={() => seekHabits()}>Carregar hábitos</button> : habits.map((habit) =>
              <div>
                <MiniButton onClick={addHowMuch}>+</MiniButton>
                <span>&nbsp;Hábito: {habit.title}</span>
                <HabitCard habit={habit} />
              </div>
            )}
            <div>
              <MiniButton onClick={searchHabit}>Pes</MiniButton>
            </div>
            <MiniButton onClick={editHabit}>...</MiniButton>
            <Button onClick={achieveHabit}>Hábito Alcançado</Button>
            <Button onClick={deleteHabit}>Remover Hábito</Button>
          </div>
        </main>
        <Menu />
      </Container>
    </>
  );
};

export default Dashboard;
