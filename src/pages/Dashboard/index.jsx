import Header from "../../components/Header";
import BlackButton from "../../components/BlackButton";
import HabitsList from "../../components/HabitsList";
import { Container, IconButton } from "./style";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import MiniButton from "../../components/MiniButon";

//icons
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";

import { DashboardContext } from "../../providers/Dashboard";
// import PopUpConfigHabit from "../../components/PopUpConfigHabit";

const Dashboard = () => {
  const { deleteHabit, addHowMuch, searchHabit, achieveHabit, editHabit } =
    useContext(DashboardContext);

  const [isConfigVisible, setIsConfigVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />
        <h2>
          Olá,teste <br></br>usuário
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
      </Container>
      {/* {isConfigVisible && (
        <PopUpConfigHabit setIsConfigVisible={setIsConfigVisible} />
      )} */}
    </>
  );
};

export default Dashboard;
