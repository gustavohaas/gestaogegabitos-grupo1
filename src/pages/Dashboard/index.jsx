import { Container, IconButton } from "./style";
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import MiniButton from "../../components/MiniButon";
import { DashboardContext } from "../../providers/Dashboard";
import PopUpConfigHabit from "../../components/PopUpConfigHabit";

const Dashboard = () => {
  const { deleteHabit, addHowMuch, searchHabit, achieveHabit, editHabit } =
    useContext(DashboardContext);

  const [isConfigVisible, setIsConfigVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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
            <div>
              <MiniButton onClick={addHowMuch}>+</MiniButton>
              <span> Hábito X</span>
            </div>

            <div>
              <MiniButton onClick={searchHabit}>Pes</MiniButton>
            </div>
            <MiniButton onClick={() => setIsConfigVisible(!isConfigVisible)}>
              ...
            </MiniButton>
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
      {isConfigVisible && (
        <PopUpConfigHabit setIsConfigVisible={setIsConfigVisible} />
      )}
    </>
  );
};

export default Dashboard;
