import { Card } from ".style/style";

const GroupCard = ({ children }) => {
  return (
    <>
      <Card>
        <h5>{children.title} </h5>
      </Card>
    </>
  );
};

export default GroupCard;
