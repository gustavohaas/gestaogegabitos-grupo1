import Button from "../Button";
import { StyledMenu, IconButton, PersonalButton, GroupsButton } from "./styles";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";
import { useHistory } from "react-router-dom";

const Menu = ({ personalColorScheme = false, groupsColorScheme = false }) => {
  const history = useHistory();

  const navigateToDashboard = (path) => {
    history.push(path);
  };

  return (
    <StyledMenu>
      <PersonalButton
        personalColorScheme={personalColorScheme}
        onClick={() => navigateToDashboard("/dashboard")}
      >
        <MdListAlt size="2em" />
      </PersonalButton>
      <Button>
        <GoPlusSmall size="2.5em" />
      </Button>
      <GroupsButton
        groupsColorScheme={groupsColorScheme}
        onClick={() => navigateToDashboard("/groups")}
      >
        <MdPeopleOutline size="2em" />
      </GroupsButton>
    </StyledMenu>
  );
};

export default Menu;
