import { Container, PopupDiv } from "./style";
import { useContext } from "react";
import Button from "../Button";
import { GoalsContext } from "../../providers/Goals";

const PopUpConfigGoals = ({ setIsConfigVisible, goal }) => {
  const { deleteGoal, achieveGoal } = useContext(GoalsContext);

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
          <Button className="configBtn" onClick={() => achieveGoal(goal)}>
            Meta Alcançada
          </Button>
          <Button className="configBtn" onClick={() => deleteGoal(goal)}>
            Remover Meta
          </Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpConfigGoals;
