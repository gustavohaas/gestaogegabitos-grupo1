import { useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import Button from "../Button";
import Input from "../Input";
import { Container, PopupDiv } from "./style";

const PopUpSearchHabits = ({ setIsSearchVisible }) => {
  const { searchHabit } = useContext(DashboardContext);

  return (
    <>
      <Container onClick={() => setIsSearchVisible(false)}>
        <PopupDiv>
          <div className="title">
            <h4>Pesquisar por hábito</h4>
            <button
              onClick={() => setIsSearchVisible(false)}
              className="greyBtn"
            >
              X
            </button>
          </div>
          <Button className="searchBtn">Enviar</Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpSearchHabits;
