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
        <Header />
        <h2>
          Olá, <br></br>usuário
        </h2>
        <div className="navContainer">
          <BlackButton habitsButtonOn={true} className='habitsButton' onClick={() => handlePage("user")}>
            <BsListTask size="1em" class="listIcon" />
            Geral
          </BlackButton>
          <BlackButton className='progressButton' onClick={() => handlePage("groups")}>
            <IoIosStats size="1em" class="statsIcon" />
            Progresso
          </BlackButton>
        </div>
        {page === "user" ? <HabitsList /> : <UserProgress />}

        <Menu personalColorScheme={true} />
      </Container>
    </>
  );
};

export default Dashboard;
