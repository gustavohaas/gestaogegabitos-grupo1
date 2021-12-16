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
      <div>
        <h3>Dashboard</h3>
        <EditProfileButton
          colorScheme={colorScheme}
          onClick={navigateToEditProfile}
        >
          <GoGear size="1.5em" />
        </EditProfileButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
