import { toast } from "react-toastify";
import { useState } from "react";
import { createContext } from "react/cjs/react.development";
import api from "../../services/api";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [habits, setHabits] = useState({});
  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));
  const addHabit = (data) => {
    api
      .post("/habits/", data)
      .then((resp) => {
        setHabits([...habits, resp]);
        console.log(resp);
        toast.success("Hábito cadastrado com sucesso");
      })
      .catch((_) => toast.error("Houve um erro ao cadastrar hábito"));
  };

  const deleteHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const editHabit = (habit) => {
    api
      .patch(`/habits/${habit.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const addHowMuch = (habit) => {
    const { how_much_achieved, achieved } = habit;
    const data = {
      achieved: achieved,
      how_much_achieved: how_much_achieved + 1,
    };
    api
      .patch(`/habits/${habit.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const achieveHabit = (habit) => {
    const { how_much_achieved } = habit;
    const data = {
      achieved: true,
      how_much_achieved: how_much_achieved,
    };
    api
      .patch(`/habits/${habit.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const searchHabit = () => {
    api
      .get(`habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp.data))
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  return (
    <DashboardContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        editHabit,
        addHowMuch,
        achieveHabit,
        searchHabit
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
