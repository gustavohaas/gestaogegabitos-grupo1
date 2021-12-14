//import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  //const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];
  const habits = JSON.parse(localStorage.getItem("@Habitactics:habits")) || [];
  console.log(habits);
  // -------------------------------------
  // Conforme conversamos, vamos pegar os hábitos do localStorge
  // useEffect(() => {
  //   api
  //     .get("habits/personal/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((resp) => setHab(resp));
  // }, []);

  const achievedHabits = (habits) => {
    const achieved = habits.filter((hab) => hab.achieved === true);
    localStorage.setItem("@Habitactics:achieved", JSON.stringify(achieved));
  };

  return (
    <ProgressContext.Provider
      value={{
        habits,
        achievedHabits,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;

export const useProgress = () => useContext(ProgressContext);
