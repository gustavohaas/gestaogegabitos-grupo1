import { Btn } from "./style";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <>
      <Btn onClick={onClick} {...rest}>
        {children}
      </Btn>
    </>
  );
};

export default Button;
