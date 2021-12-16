import { Card } from "./style";

const ProgressCard = ({ children }) => {
  return (
    <>
      <Card>
        <h5>{children}</h5>
      </Card>
    </>
  );
};

export default ProgressCard;
