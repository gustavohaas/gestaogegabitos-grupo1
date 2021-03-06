import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const GroupsAddContext = createContext();

export const GroupsAddProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

  const [actualGroup, setActualGroup] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [filteredGroupList, setFilteredGroupList] = useState([]);
  const [subscribedGroups, setSubscribedGroups] = useState([]);

  const groupSearch = (input) => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setGroupList(response.data.results);
        const list = groupList.filter(
          (item) =>
            item.name.includes(input) || item.description.includes(input)
        );
        setFilteredGroupList(list);
        console.log(filteredGroupList);
      })
      .catch((err) => console.log(err));
  };

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
      .post(`groups/${group_id}/subscribe/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        myGroups();
        toast.success("Inscrito com sucesso!");
      })
      .catch((err) => console.log(token));
  };

  //Mostrar minhas inscri????es
  const myGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setSubscribedGroups(resp.data))
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
        groupSearch,
        subscribeOnGroup,
        leaveGroup,
        groupList,
        myGroups,
        subscribedGroups
      }}
    >
      {children}
    </GroupsAddContext.Provider>
  );
};
export const ProviderGroup = () => useContext(GroupsAddContext);
