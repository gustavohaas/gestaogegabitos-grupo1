import { Container, InputStyled } from "./style";

const Input = ({ register, name, error, ...rest }) => {
  return (
    <>
      <Container>
        <InputStyled {...register(name)} {...rest} />

        <div>{error && <span>{error}</span>}</div>
      </Container>
    </>
  );
};

export default Input;
