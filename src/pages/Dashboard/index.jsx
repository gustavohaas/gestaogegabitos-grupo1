import { useState } from "react";

import Header from "../../components/Header";
import BlackButton from "../../components/BlackButton";
import HabitsList from "../../components/HabitsList";
import UserProgress from "../../components/UserProgress";
import { Container } from "./style";
import Menu from "../../components/Menu";

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

  const [page, setPage] = useState('user');

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Container>
        <header>
          <p>Dashboard</p>
          <IconButton>
            <GoGear size="1.5em" />
          </IconButton>
        </header>
        <h2>Seja bem-vindo(a), usuário</h2>
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
            <Collapsible title="Categoria">
              <p>Tarefa</p>
            </Collapsible>
            <div>
              <MiniButton onClick={addHowMuch}>+</MiniButton>
              <span> Hábito X</span>
            </div>

            <div>
              <MiniButton onClick={searchHabit}>Pes</MiniButton>
            </div>
            <Button onClick={achieveHabit}>Hábito Alcançado</Button>
            <Button onClick={deleteHabit}>Remover Hábito</Button>
          </div>
        </main>
        <footer>
          <IconButton>
            <MdListAlt size="2em" />
          </IconButton>
          <Button>
            <GoPlusSmall size="2em" />
          </Button>
          <IconButton>
            <MdPeopleOutline size="2em" />
          </IconButton>
        </footer>
      </Container>
    </>
  );
};

export default Dashboard;
