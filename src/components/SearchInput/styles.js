import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 40px;
  margin-top: 10px;
  background: var(--popup-color);
  border: 2px solid var(--darkgrey);
  /* box-sizing: border-box; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  color: var(--white);
  background-color: var(--popup-color);
`;
