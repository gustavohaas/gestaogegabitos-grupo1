import { Container, PopupDiv } from "./style";
import { useContext } from "react";
import Button from "../Button";
import { DashboardContext } from "../../providers/Dashboard";

const PopUpConfigHabit = ({ setIsConfigVisible, habit }) => {
  const { deleteHabit, achieveHabit } = useContext(DashboardContext);

  console.log(habit);

  function handlePopup() {
    achieveHabit(habit);

    setTimeout(() => {
      setIsConfigVisible(false);
    }, 1000);
  }
  return (
    <>
      <Container>
        <PopupDiv>
          <div>
            <button
              className="greyBtn"
              onClick={() => setIsConfigVisible(false)}
            >
              x
            </button>
          </div>
          <Button className="configBtn" onClick={handlePopup}>
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
