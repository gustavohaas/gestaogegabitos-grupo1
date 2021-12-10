import { Mini } from "./style";

const MiniButton = ({ children, onClick }) => {
  return (
    <>
      <Mini onClick={onClick}>{children}</Mini>
    </>
  );
};

export default MiniButton;
