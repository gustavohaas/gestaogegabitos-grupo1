import { useContext } from "react";
import MiniButton from "../MiniButon";
import { GroupsAddContext } from "../../providers/GroupsAdd";
import { Card } from "../HabitCard/style";

const GroupSearchCard = ({ children }) => {

  const { subscribeOnGroup } = useContext(GroupsAddContext);

  return (
    <>
      <Card>
        <div className="">
          <h5>{children.name} </h5>
        </div>

        <MiniButton onClick={() => subscribeOnGroup(children.id)}>
          +
        </MiniButton>
      </Card>
    </>
  );
};

export default GroupSearchCard;
