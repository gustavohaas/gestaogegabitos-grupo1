import { createContext, useState } from "react";
import api from "../../services/api";

export const HabitCardContext = createContext();

const HabitCardProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    const token = JSON.parse(localStorage.getItem("@Habitactics:token")) || [];

    const seekHabits = () => {
        api
            .get("habits/personal/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const myHabits = response.data;
                setHabits([myHabits]);
                console.log(habits);
            })
            .catch((error) => console.log(error));
    };

    return (
        <HabitCardContext.Provider
            value={{
                habits, setHabits, seekHabits,
            }}
        >
            {children}
        </HabitCardContext.Provider>
    );
};

export default HabitCardProvider;
