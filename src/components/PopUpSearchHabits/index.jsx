import { useContext, useState } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import Button from "../Button";
import Input from "../Input";
import { Container, PopupDiv } from "./style";

const PopUpSearchHabits = ({ setIsSearchVisible }) => {
  const { searchHabit } = useContext(DashboardContext);
  const [input, setInput] = useState("");

  return (
    <>
      <Container>
        <PopupDiv>
          <div className="title">
            <h4>Pesquisar por hábito:</h4>
            <button
              className="greyBtn"
              onClick={() => setIsSearchVisible(false)}
            >
              X
            </button>
          </div>
          <div className="search">
            <input onChange={(e) => setInput(e.target.value)} />
            <Button className="searchBtn" onClick={() => searchHabit(input)}>
              Enviar
            </Button>
          </div>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpSearchHabits;
