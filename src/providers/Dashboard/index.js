import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { createContext } from "react/cjs/react.development";
import api from "../../services/api";
import { HabitsContext, ProviderHabit } from "../Habits";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [habits, setHabits] = useState({});
  const [list, setList] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const addHabit = (data) => {
    console.log(data);
    console.log(token);
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setList([...list, resp.data]);
        console.log(resp);
        toast.success("Hábito cadastrado com sucesso");
      })
      .catch((_) => toast.error("Houve um erro ao cadastrar hábito"));
  };

  const deleteHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => listHabits())
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
    console.log(habit);
    const { how_much_achieved, achieved } = habit;
    const data = {
      achieved: achieved,
      how_much_achieved: how_much_achieved + 1,
    };
    console.log(data);
    api
      .patch(`/habits/${habit.id}/`, data, {
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
      .patch(`/habits/${habit.id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => listHabits())
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const searchHabit = (input) => {
    api
      .get(`habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        const test = resp.data.filter(
          (iten) => iten.title.includes(input) || iten.category === input
        );
      })
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  const listHabits = () => {
    api
      .get(`habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setList(resp.data);
      })
      .catch((_) => toast.error("Hábito não encontrado"));
  };

  return (
    <DashboardContext.Provider
      value={{
        habits,
        addHabit,
        searchHabit,
        deleteHabit,
        editHabit,
        addHowMuch,
        achieveHabit,
        listHabits,
        list,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
