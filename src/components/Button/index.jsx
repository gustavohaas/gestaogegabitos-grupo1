import { Btn } from "./style";

const Button = ({ children, onClick }) => {
  return (
    <>
      <Btn onClick={onClick}>{children}</Btn>
    </>
  );
};

export default Button;
