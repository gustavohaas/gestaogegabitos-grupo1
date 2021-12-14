import { Container, IconButton } from "./style";
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import MiniButton from "../../components/MiniButon";
import { DashboardContext } from "../../providers/Dashboard";
import PopUpConfigHabit from "../../components/PopUpConfigHabit";
import PopUpSearchHabits from "../../components/PopUpSearchHabits";

const Dashboard = () => {
  const { deleteHabit, addHowMuch, searchHabit, achieveHabit, editHabit } =
    useContext(DashboardContext);

  const [isConfigVisible, setIsConfigVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />
        <h2>Seja bem-vindo(a), usuário</h2>
        <nav>
          <div>
            <button className="day">Hoje</button>
            <button className="ellipsis">…</button>
          </div>
          <IconButton
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="search"
          >
            <GoSearch size="1.5em" />
          </IconButton>
        </nav>
        <main>
          <div className="tasks">
            <div>
              <span> Hábito X</span>
              <MiniButton onClick={addHowMuch}>+</MiniButton>
              <MiniButton onClick={() => setIsConfigVisible(!isConfigVisible)}>
                ...
              </MiniButton>
            </div>
          </div>
        </main>
        <Menu personalColorScheme={true} />
      </Container>
      {isConfigVisible && (
        <PopUpConfigHabit setIsConfigVisible={setIsConfigVisible} />
      )}
      {isSearchVisible && (
        <PopUpSearchHabits setIsSearchVisible={setIsSearchVisible} />
      )}
    </>
  );
};

export default Dashboard;
