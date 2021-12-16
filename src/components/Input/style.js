import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;

  background: var(--popup-color);
  border: 2px solid var(--darkgrey);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputStyled = styled.input`
  width: 85%;
  border: none;
  background-color: var(--popup-color);
  color: var(--white);
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--popup-color) inset;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--white) !important;
  }
`;
