import Collapsible from "../Collapsible";
import Input from "../Input";
import Button from "../Button";
import Container from "./style.js";

const AddPopUp = () => {
  const handleAddHabit = () => {
    //Chama o context para dar o post na requisição de adicionar hábito
  };

  const handleCancel = () => {
    //Somente fecha o popup
  };

  return (
    <Container>
      <Input placeholder="Título" />
      <div>
        <Collapsible title="Categoria"></Collapsible>{" "}
        <Collapsible title="Dificuldade"></Collapsible>
      </div>
      <div>
        <Collapsible title="Frequencia"></Collapsible>{" "}
        <Collapsible title="Concluída"></Collapsible>
      </div>
      <Collapsible title="Percentual Alcançado"></Collapsible>{" "}
      <div>
        <Button onClick={handleAddHabit}>Adicionar</Button>
        <Button onClick={handleCancel}>Adicionar</Button>
      </div>
    </Container>
  );
};

export default AddPopUp;
