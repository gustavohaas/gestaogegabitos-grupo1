import { Container } from "./styles";

const MyGroups = () => {
  const mygroups = 0;

  return (
    <Container>
      <h2>Meus grupos</h2>
      {mygroups > 0 ? (
        <p>Aqui vai um card para cada grupo criado</p>
      ) : (
        <p>Você ainda não criou nenhum grupo.</p>
      )}
    </Container>
  );
};

export default MyGroups;
