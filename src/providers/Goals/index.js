import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const GoalsContext = createContext();

const GoalsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const [goals, setGoals] = useState([]);
  const [goalsList, setGoalsList] = useState([]);

  const addGoal = (data) => {
    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setGoals([...goals, resp.data]);
        console.log(resp.data);
        toast.success("Meta cadastrada com sucesso");
      })
      .catch((_) => toast.error("Houve um erro ao cadastrar meta"));
  };

  const searchGoal = (group) => {
    api
      .get(`/goals/?group=${group.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setGoalsList(resp.data);
        console.log(resp.data);
      })
      .catch((_) => toast.error("Meta não encontrada"));
  };

  const achieveGoal = (goal) => {
    const { how_much_achieved } = goal;
    const data = {
      achieved: true,
      how_much_achieved: how_much_achieved,
    };
    api
      .patch(`/goals/${goal.id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => listGoals(goal.group))
      .catch((_) => toast.error("Meta não encontrada"));
  };

  const deleteGoal = (goal) => {
    api
      .delete(`/goals/${goal.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => listGoals(goal.group))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const listGoals = (id) => {
    api
      .get(`/goals/?group=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setGoals(resp.data);
        console.log(goals);
      })
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  return (
    <GoalsContext.Provider
      value={{
        addGoal,
        searchGoal,
        achieveGoal,
        deleteGoal,
        listGoals,
        goals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export default GoalsProvider;
