import { StyledHeader, EditProfileButton } from "./styles";
import { GoGear } from "react-icons/go";

const Header = () => {
  return (
      <StyledHeader>
        <h3>Dashboard</h3>
        <EditProfileButton>
          <GoGear size="1.5em" />
        </EditProfileButton>
      </StyledHeader>
  );
};

export default Header;
