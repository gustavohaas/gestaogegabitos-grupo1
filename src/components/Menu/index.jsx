import Button from "../Button";
import { StyledMenu, IconButton } from "./styles";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const navigateToDashboard = (path) => {
    history.push(path);
  };

  return (
    <StyledMenu>
      <IconButton onClick={() => navigateToDashboard("/dashboard")}>
        <MdListAlt size="2em" />
      </IconButton>
      <Button>
        <GoPlusSmall size="2.5em" />
      </Button>
      <IconButton>
        <MdPeopleOutline
          size="2em"
          onClick={() => navigateToDashboard("/groups")}
        />
      </IconButton>
    </StyledMenu>
  );
};

export default Menu;
