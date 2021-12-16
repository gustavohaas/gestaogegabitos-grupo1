import { StyledHeader, EditProfileButton } from "./styles";
import { GoGear } from "react-icons/go";

import { useHistory } from "react-router-dom";

const Header = ({ colorScheme = false }) => {
  const history = useHistory();

  const navigateToEditProfile = () => {
    history.push("/profile");
  };

  return (
    <StyledHeader>
      <h3>Dashboard</h3>
      <EditProfileButton
        colorScheme={colorScheme}
        onClick={navigateToEditProfile}
      >
        <GoGear size="1.5em" />
      </EditProfileButton>
    </StyledHeader>
  );
};

export default Header;
