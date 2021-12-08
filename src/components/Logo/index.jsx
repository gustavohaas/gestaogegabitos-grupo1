import { Header, LogoTitle, LogoImage } from "./style";
import iconLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Header>
      <LogoTitle>Habitatics</LogoTitle>
      <LogoImage src={iconLogo} />
    </Header>
  );
};

export default Logo;
