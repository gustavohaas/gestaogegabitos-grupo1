import { useEffect, useState } from "react";
import { createContext } from "react/cjs/react.development";
import api from "../../services/api";

export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [hab, setHab] = useState({});
  const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];

  useEffect(() => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setHab(resp));
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        hab,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
