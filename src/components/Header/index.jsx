import { StyledHeader, EditProfileButton } from "./styles";
import { GoGear } from "react-icons/go";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const navigateToEditProfile = () => {
    history.push("/profile");
  };

  return (
    <StyledHeader>
      <h3>Dashboard</h3>
      <EditProfileButton onClick={navigateToEditProfile}>
        <GoGear size="1.5em" />
      </EditProfileButton>
    </StyledHeader>
  );
};

export default Header;
