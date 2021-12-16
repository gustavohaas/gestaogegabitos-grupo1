import Header from "../../components/Header";
import BlackButton from "../../components/BlackButton";
import HabitsList from "../../components/HabitsList";
import UserProgress from "../../components/UserProgress";
import { Container, DashboardContainer, IconButton } from "./style";
import Menu from "../../components/Menu";
import { useContext, useState } from "react";
// import Button from "../../components/Button";
// import MiniButton from "../../components/MiniButon";

//icons
// import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
// import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";

import { DashboardContext } from "../../providers/Dashboard";
import { useEffect } from "react";
// import PopUpConfigHabit from "../../components/PopUpConfigHabit";

const Dashboard = () => {
  const {
    deleteHabit,
    addHowMuch,
    searchHabit,
    achieveHabit,
    editHabit,
    listHabits,
    list,
  } = useContext(DashboardContext);

  const [isConfigVisible, setIsConfigVisible] = useState(false);
  const [page, setPage] = useState("user");

  const username = localStorage.getItem("@Habitactics:username");

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    listHabits();
  }, []);

  return (
    <Container>
      <Header />
      <div className="msgContainer">
        <h2>Olá, {username.replaceAll('"', "")}!</h2>
      </div>
      <DashboardContainer>
        <Header />
        {/* <h2>Olá, {username}!</h2> */}
        <div className="navContainer">
          <BlackButton className="overviewButton">
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
      </DashboardContainer>
      {/* {isConfigVisible && (
        <PopUpConfigHabit setIsConfigVisible={setIsConfigVisible} />
      )} */}
    </Container>
  );
};

export default Dashboard;
