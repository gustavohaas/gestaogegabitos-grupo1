import { Btn } from "./style";

const Button = ({ children, ...rest }) => {
  return (
    <>
      <Btn {...rest}>{children}</Btn>
    </>
  );
};

export default Button;
