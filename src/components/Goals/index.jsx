import { Container } from "./styles";

const Goals = () => {
  const goals = 0;

  return (
    <Container>
      <h2>Metas</h2>
      {goals > 0 ? (
        <p>Aqui vai um card para cada meta</p>
      ) : (
        <p>Você ainda não possui metas.</p>
      )}
    </Container>
  );
};

export default Goals;
