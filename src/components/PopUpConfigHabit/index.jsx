import { Container, PopupDiv } from "./style";
import { useContext } from "react";
import Button from "../Button";
import { DashboardContext } from "../../providers/Dashboard";

const PopUpConfigHabit = ({ setIsConfigVisible }) => {
  //utilizar preventDefault
  const { deleteHabit, achieveHabit, editHabit } = useContext(DashboardContext);

  return (
    <>
      <Container onClick={() => setIsConfigVisible(false)}>
        <PopupDiv>
          <div>
            <button
              className="greyBtn"
              onClick={() => setIsConfigVisible(false)}
            >
              X
            </button>
          </div>
          <Button className="configBtn" onClick={achieveHabit}>
            Hábito Alcançado
          </Button>
          <Button className="configBtn" onClick={deleteHabit}>
            Remover Hábito
          </Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpConfigHabit;
