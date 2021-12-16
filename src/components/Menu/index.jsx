import Button from "../Button";
import { StyledMenu, IconButton, PersonalButton, GroupsButton } from "./styles";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Menu = ({ personalColorScheme = false, groupsColorScheme = false }) => {
  const history = useHistory();

  const navigateToDashboard = (path) => {
    history.push(path);
  };

  return (
    <StyledMenu>
      <div>
        <PersonalButton
          personalColorScheme={personalColorScheme}
          onClick={() => navigateToDashboard("/dashboard")}
        >
          <BsPerson size="1.6em" />
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
      </div>
    </StyledMenu>
  );
};

export default Menu;
