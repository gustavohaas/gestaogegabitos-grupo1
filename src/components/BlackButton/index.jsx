import { Button } from "./styles";

const BlackButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default BlackButton;
