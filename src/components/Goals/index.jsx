import { useContext, useEffect } from "react";
import { GoalsContext } from "../../providers/Goals";
import GoalCard from "../GoalCard";
import { StyleList, StyleListContainer } from "./styles";

const Goals = ({ group }) => {
  // const { goals, listGoals } = useContext(GoalsContext);

  // useEffect(() => {
  //   listGoals(groupID);
  // }, []);
  console.log(group.goals)

  return (
    <>
      <h2>Metas</h2>
      <ul>
        {group.goals.map((goal, index) => {
          return (
            <StyleListContainer>
              <StyleList key={index}>
                <GoalCard>
                  {goal}
                </GoalCard>
              </StyleList>
            </StyleListContainer>
          );
        })}
      </ul>
    </>
  );
};

export default Goals;
