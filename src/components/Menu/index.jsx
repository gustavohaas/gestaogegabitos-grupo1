import Button from "../Button";
import { StyledMenu, IconButton } from "./styles";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";

const Menu = () => {
  return (
    <StyledMenu>
      <IconButton>
        <MdListAlt size="2em" />
      </IconButton>
      <Button>
        <GoPlusSmall size="2.5em" />
      </Button>
      <IconButton>
        <MdPeopleOutline size="2em" />
      </IconButton>
    </StyledMenu>
  );
};

export default Menu;
