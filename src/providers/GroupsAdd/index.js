import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const GroupsAddContext = createContext();

export const GroupsAddProvider = ({ children }) => {
  const [actualGroup, setActualGroup] = useState({});
  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        toast.success("Grupo cadastrado com sucesso");
      })
      .catch((_) => toast.error("Houve um erro ao cadastrar grupo"));
  };

  const getAGroup = (groupId) => {
    api
      .get(`/groups/${groupId}/`)
      .then((response) => setActualGroup(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <GroupsAddContext.Provider
      value={{
        createGroup,
        getAGroup,
        actualGroup,
      }}
    >
      {children}
    </GroupsAddContext.Provider>
  );
};
export const ProviderGroup = () => useContext(GroupsAddContext);
