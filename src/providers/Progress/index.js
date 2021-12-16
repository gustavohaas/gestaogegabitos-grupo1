//import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  //const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];
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

  const achievedHabits = (list) => {
    const achieved = list.filter((hab) => hab.achieved === true);
    localStorage.setItem("@Habitactics:achieved", JSON.stringify(achieved));
  };

  return (
    <ProgressContext.Provider
      value={{
        achievedHabits,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;

export const useProgress = () => useContext(ProgressContext);
