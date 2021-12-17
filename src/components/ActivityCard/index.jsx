import { IoMdTennisball } from "react-icons/io";
import { Card, CardInfo1 } from "./style";
import MiniButton from "../MiniButon";
import { useState } from "react";
import PopUpConfigActivity from "../PopUpConfigActivity";

const ActivityCard = ({ children }) => {
  const [isConfigVisible, setIsConfigVisible] = useState(false);
  return (
    <>
      <Card>
        <div className="">
          <h5>{children.title} </h5>
        </div>

        <MiniButton onClick={() => setIsConfigVisible(!isConfigVisible)}>
          ...
        </MiniButton>
      </Card>
      {isConfigVisible && (
        <PopUpConfigActivity
          activity={children}
          setIsConfigVisible={setIsConfigVisible}
        />
      )}
    </>
  );
};

export default ActivityCard;
