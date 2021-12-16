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
        <div className="">
          <MiniButton onClick={() => addHowMuch(children)}>+</MiniButton>
          <h5>{children.title} </h5>
        </div>

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
