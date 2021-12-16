import { Container } from "./styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <Container>
        <Logo />
        <div>
          <Button onClick={() => navigateTo("/login")}>Login</Button>
          <Button onClick={() => navigateTo("/signup")}>Cadastrar</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
