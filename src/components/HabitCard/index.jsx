import { IoMdTennisball } from "react-icons/io";
import { Card, CardInfo1 } from "./style";
import MiniButton from "../MiniButon";
import { useState } from "react";
import PopUpConfigHabit from "../PopUpConfigHabit";

const HabitCard = ({ addHowMuch, children }) => {
  const [isConfigVisible, setIsConfigVisible] = useState(false);
  return (
    <>
      <Card>
        <h5>{children.title} </h5>
        <MiniButton onClick={() => addHowMuch(children)}>+</MiniButton>
        <MiniButton onClick={() => setIsConfigVisible(!isConfigVisible)}>
          ...
        </MiniButton>
      </Card>
      {isConfigVisible && (
        <PopUpConfigHabit
          habit={children}
          setIsConfigVisible={setIsConfigVisible}
        />
      )}
    </>
  );
};

export default HabitCard;
