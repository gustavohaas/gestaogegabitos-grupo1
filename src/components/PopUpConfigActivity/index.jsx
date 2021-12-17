import { Container, PopupDiv } from "./style";
import { useContext, useState } from "react";
import Button from "../Button";
import { GroupsActivitiesContext } from "../../providers/GroupsActivities";
import { ContainerInput, InputStyled } from "./style";

const PopUpConfigActivity = ({ setIsConfigVisible, activity }) => {
  const { deleteActivity, updateActivity } = useContext(GroupsActivitiesContext);
  const [nameActivity, setNameActivity] = useState({ title: activity.title });

  return (
    <>
      <Container>
        <PopupDiv>
          <div>
            <button
              className="greyBtn"
              onClick={() => setIsConfigVisible(false)}
            >
              x
            </button>
          </div>
          <ContainerInput>
            <InputStyled value={nameActivity.title} placeholder="Atividade" onChange={(e) => setNameActivity({ title: e.target.value })} />
          </ContainerInput>
          <Button className="configBtn" onClick={() => updateActivity(nameActivity, activity.id)}>
            Editar Atividade
          </Button>
          <Button className="configBtn" onClick={() => deleteActivity(activity.id)}>
            Remover Atividade
          </Button>
        </PopupDiv>
      </Container>
    </>
  );
};

export default PopUpConfigActivity;
