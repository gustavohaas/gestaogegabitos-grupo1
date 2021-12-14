import { Container } from "./styles";
import Button from "../../components/Button";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <Container>
        <h1>Habitactics</h1>
        <div>
          <Button onClick={() => navigateTo("/login")}>Login</Button>
          <Button onClick={() => navigateTo("/signup")}>Cadastrar</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
