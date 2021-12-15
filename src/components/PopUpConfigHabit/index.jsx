import { Container, PopupDiv } from "./style";
import { useContext } from "react";
import Button from "../Button";
import { DashboardContext } from "../../providers/Dashboard";

const PopUpConfigHabit = ({ setIsConfigVisible, habit }) => {
  const { deleteHabit, achieveHabit } = useContext(DashboardContext);

  console.log(habit);
  return (
    <>
      <Container>
        <PopupDiv>
          <div>
            <button
              className="greyBtn"
              onClick={() => setIsConfigVisible(false)}
            >
              X
            </button>
          </div>
          <Button className="configBtn" onClick={() => achieveHabit(habit)}>
            Hábito Alcançado
          </Button>
          <Button className="configBtn" onClick={() => deleteHabit(habit)}>
            Remover Hábito
          </Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpConfigHabit;