import { toast } from "react-toastify";
import { useState } from "react";
import { createContext } from "react/cjs/react.development";
import api from "../../services";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [habits, setHabits] = useState({});

  const addHabit = (data) => {
    api
      .post("/habits/", data)
      .then((resp) => {
        setHabits([...habits, resp]);
        toast.success("Hábito cadastrado com sucesso");
      })
      .catch((_) => toast.error("Houve um erro ao cadastrar hábito"));
  };

  const deleteHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}`)
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  return (
    <DashboardContext.Provider value={{ habits, addHabit, deleteHabit }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
