import { Container, InputStyled } from "./style";

const Input = ({ register, name, ...rest }) => {
  return (
    <>
      <Container>
        <InputStyled {...register(name)} {...rest} />
      </Container>
    </>
  );
};

export default Input;
