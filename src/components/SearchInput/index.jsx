import { Container, InputStyled } from "./styles";

const SearchInput = ({ icon: Icon, ...rest }) => {
  return (
      <Container>
        {Icon && <Icon size={18} />}
        <InputStyled {...rest} />
      </Container>
  );
};

export default SearchInput;
