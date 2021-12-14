import Header from "../../components/Header";
import BlackButton from "../../components/BlackButton";
import HabitsList from "../../components/HabitsList";
import { Container, IconButton } from "./style";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import MiniButton from "../../components/MiniButon";

//icons
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";

import { useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";

const Dashboard = () => {
  const { deleteHabit, addHowMuch, searchHabit, achieveHabit, editHabit } =
    useContext(DashboardContext);

  return (
    <>
      <Container>
        <Header />
        <h2>
          Olá, <br></br>usuário
        </h2>
        <div className="navContainer">
          <BlackButton>
            <BsListTask size="1em" class="listIcon" />
            Geral
          </BlackButton>
          <BlackButton>
            <IoIosStats size="1em" class="statsIcon" />
            Progresso
          </BlackButton>
        </div>
        <HabitsList />
        <Menu personalColorScheme={true} />
        {/* <nav>
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
            <div>
              <MiniButton onClick={addHowMuch}>+</MiniButton>
              <span> Hábito X</span>
            </div>

            <div>
              <MiniButton onClick={searchHabit}>Pes</MiniButton>
            </div>
            <MiniButton onClick={editHabit}>...</MiniButton>
            <Button onClick={achieveHabit}>Hábito Alcançado</Button>
            <Button onClick={deleteHabit}>Remover Hábito</Button>
          </div>
        </main> */}
      </Container>
    </>
  );
};

export default Dashboard;
