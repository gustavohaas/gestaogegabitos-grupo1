import { useContext, useEffect } from "react";
import { GoalsContext } from "../../providers/Goals";
import GoalCard from "../GoalCard";
import { Container } from "./styles";

const Goals = ({ group }) => {
  // const { goals, listGoals } = useContext(GoalsContext);

  // useEffect(() => {
  //   listGoals(groupID);
  // }, []);
  console.log(group.goals)

  return (
    <Container>
      <h2>Metas</h2>
      {group.goals.map((goal) => {
        return (
          <GoalCard>{goal}</GoalCard>
        )
      })
      }
    </Container>
  );
};

export default Goals;
