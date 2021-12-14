import { useState } from "react";
import { HabitBtn, Table } from "./style";
import CustomPopup from "../../components/CustomPopup";

const HabitCard = ({ habit }) => {

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    return (<>
        <HabitBtn onClick={(e) => setVisibility(!visibility)}>…</HabitBtn> {/* botão para mostrar hábito */}

        <CustomPopup
            onClose={popupCloseHandler}
            show={visibility}
            title={`Hábito`}
        >
            <Table>
                <tr>
                    <th>Título:</th>
                    <td>{habit.title}</td>
                </tr>
                <tr>
                    <th>Categoria:</th>
                    <td>{habit.category}</td>
                </tr>
                <tr>
                    <th>Dificuldade:</th>
                    <td>{habit.difficulty}</td>
                </tr>
                <tr>
                    <th>Frequência:</th>
                    <td>{habit.frequency}</td>
                </tr>
                <tr>
                    <th>Alcançado:</th>
                    <td>{habit.achieved}</td>
                </tr>
                <tr>
                    <th>Quanto conquistou:</th>
                    <td>{habit.how_much_achieved}</td>
                </tr>
            </Table>
        </CustomPopup>
    </>)
}

export default HabitCard;