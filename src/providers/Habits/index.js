import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const createHabit = (data) => {
    api
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(habit);
        setHabit([...habit, response.data]);
        localStorage.setItem("@Habitactics:habits", JSON.stringify(habit));
      })
      .catch((error) => console.log(error));
  };
  console.log(habit);

  return (
    <HabitsContext.Provider
      value={{
        createHabit,
        habit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitProvider;
