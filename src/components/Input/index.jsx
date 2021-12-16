import { Container, InputStyled } from "./style";

const Input = ({ icon: Icon, register, name, error, ...rest }) => {
  return (
    <>
      <Container>
        {Icon && <Icon size={20} />}
        <InputStyled {...register(name)} {...rest} />
        {/* <div>{error && <span>{error}</span>}</div> */}
      </Container>
    </>
  );
};

export default Input;
