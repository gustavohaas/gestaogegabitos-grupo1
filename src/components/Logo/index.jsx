import { Header, LogoTitle, LogoImage } from "./style";
import iconLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Header>
      <LogoImage src={iconLogo} />
      <LogoTitle>Habitactics</LogoTitle>
    </Header>
  );
};

export default Logo;
