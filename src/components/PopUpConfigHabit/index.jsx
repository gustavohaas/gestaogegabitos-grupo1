import { Container, PopupDiv } from "./style";
import { useContext } from "react";
import Button from "../Button";
import { GoalsContext } from "../../providers/Goals";

const PopUpConfigGoals = ({ setIsConfigVisible, habit }) => {
  const { deleteGoal, achieveGoal } = useContext(GoalsContext);

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
          <Button className="configBtn" onClick={() => achieveGoal(habit)}>
            Meta Alcançada
          </Button>
          <Button className="configBtn" onClick={() => deleteGoal(habit)}>
            Remover Meta
          </Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpConfigGoals;
