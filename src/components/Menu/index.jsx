import Button from "../Button";
import { StyledMenu, IconButton, PersonalButton, GroupsButton } from "./styles";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Habits from "../../pages/Habits";

const Menu = ({ personalColorScheme = false, groupsColorScheme = false }) => {
  const history = useHistory();

  const navigateToDashboard = (path) => {
    history.push(path);
  };

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <>
      <Habits popupCloseHandler={popupCloseHandler} visibility={visibility} />
      <StyledMenu>
        <PersonalButton
          personalColorScheme={personalColorScheme}
          onClick={() => navigateToDashboard("/dashboard")}
        >
          <BsPerson size="1.6em" />
        </PersonalButton>
        <Button onClick={(e) => setVisibility(!visibility)}>
          <GoPlusSmall size="2.5em" />
        </Button>
        <GroupsButton
          groupsColorScheme={groupsColorScheme}
          onClick={() => navigateToDashboard("/groups")}
        >
          <MdPeopleOutline size="2em" />
        </GroupsButton>
      </StyledMenu>
    </>
  );
};

export default Menu;
