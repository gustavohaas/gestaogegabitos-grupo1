import { useState } from "react";
import { createContext } from "react";
import api from "../../services/api";


export const GroupSearchContex = createContext();

const GroupSearchProvider = ({ children }) => {

    const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

    const [groupList, setGroupList] = useState([])
    const [filteredGroupList, setFilteredGroupList] = useState([])

    const GroupSearch = (input) => {

        api
            .get('/groups/', {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data.results)
                setGroupList(response.data.results)
                const list = groupList.filter(
                    (item) =>
                        item.name.includes(input) ||
                        item.description.includes(input)
                );
                setFilteredGroupList(list)
                console.log(filteredGroupList)
            })
            .catch((err) => console.log(err))
    };

    return (
        <GroupSearchContex.Provider value={{GroupSearch, filteredGroupList}}>
            {children}
        </GroupSearchContex.Provider>
    );
};

export default GroupSearchProvider