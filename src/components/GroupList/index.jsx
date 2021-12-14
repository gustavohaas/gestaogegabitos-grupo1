import { Container } from "./styles";

const GroupList = () => {
  const groups = 0;

  return (
    <Container>
      <h2>Grupos</h2>
      {groups > 0 ? (
        <p>Aqui vai um card para cada grupo</p>
      ) : (
        <p>Você não está em nenhum grupo.</p>
      )}
    </Container>
  );
};

export default GroupList;
