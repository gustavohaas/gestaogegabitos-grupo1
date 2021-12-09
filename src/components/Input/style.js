import styled from "styled-components";

export const Container = styled.div`
  width: 343px;
  height: 48px;

  background: var(--popup-color);
  mix-blend-mode: normal;
  border: 1.5px solid var(--darkgrey);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transform: rotate(-0.05deg);
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  width: 335px;
  border: none;
  height: auto;
  background-color: none;
`;
