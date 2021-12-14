import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const createHabit = (data) => {
    console.log(data);
    api
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(habit);
        setHabit([...habit, response]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <HabitsContext.Provider
      value={{
        createHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const ProviderHabit = () => useContext(HabitsContext);
