import { Button } from "./styles";

const GrayButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default GrayButton;
