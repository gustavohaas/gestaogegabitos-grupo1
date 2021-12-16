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

  // const getAGroup = (groupId) => {
  //   api
  //     .get(`/groups/${groupId}/`)
  //     .then((response) => setActualGroup(response.data))
  //     .catch((error) => console.log(error));
  // };

  //Inscrever-se em um grupo
  const subscribeOnGroup = (group_id) => {
    api
      .post(`/groups/${group_id}/subscribe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log("Inscrito"))
      .catch((err) => console.log(err));
  };

  //Mostrar minhas inscrições
  const myGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log("Inscrito"))
      .catch((err) => console.log(err));
  };

  //Sair de um grupo

  const leaveGroup = (group_id) => {
    api
      .delete(`/groups/${group_id}/unsubscribe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log("Inscrito"))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsAddContext.Provider
      value={{
        createGroup,
        actualGroup,
      }}
    >
      {children}
    </GroupsAddContext.Provider>
  );
};
export const ProviderGroup = () => useContext(GroupsAddContext);
