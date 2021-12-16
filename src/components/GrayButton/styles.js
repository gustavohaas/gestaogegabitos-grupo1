import styled from "styled-components";

export const Button = styled.button`
  background: var(--darkgrey);
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  color: var(--white);
  width: 343px;
  height: 48px;
  cursor: pointer;
  /* font-weight: bold; */
  transition: 0.5s;

  :hover {
    filter: brightness(1.2);
  }
`;