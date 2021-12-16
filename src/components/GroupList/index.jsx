import { Container } from "./style";
import { useContext } from "react";
import { GroupsAddContext } from "../../providers/GroupsAdd";
import GroupCardList from "../GroupCardList";
import { useEffect } from "react";

const GroupList = () => {
  const {
    createGroup,
    actualGroup,
    groupSearch,
    subscribeOnGroup,
    leaveGroup,
    groupList,
    subscribedGroups,
    myGroups
  } = useContext(GroupsAddContext);

  return (
    <Container>
      <h2>Grupos</h2>
      {subscribedGroups.length > 0 ? (
          <GroupCardList />
      ) : (
        <p>Você não está em nenhum grupo.</p>
      )}
    </Container>
  );
};

export default GroupList;
