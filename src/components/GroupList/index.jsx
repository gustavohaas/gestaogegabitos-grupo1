import { Container } from "./style";
import { useContext } from "react";
import { GroupsAddContext } from "../../providers/GroupsAdd";

const GroupList = () => {
  const {
    createGroup,
    actualGroup,
    groupSearch,
    subscribeOnGroup,
    leaveGroup,
    groupList,
  } = useContext(GroupsAddContext);

  console.log(groupList);
  const groups = groupList.length;

  return (
    <Container>
      <h2>Grupos</h2>
      {groups > 0 ? (
        <p>Aqui vai um card para cada grupo</p>
      ) : (
        <p>Você não está em nenhum grupo.</p>
      )}
    </Container>
  );
};

export default GroupList;
