import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5Njc2MzEyLCJqdGkiOiJkMWQ0ZjAzMWRhMjY0MTc3ODkzYzYxYzg3ZTUwY2Y5ZSIsInVzZXJfaWQiOjkzfQ.Wm-v13rpYHda150FlUmIDjMhnlVl9irb-tRsML1rCjg";
  console.log(token);

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
