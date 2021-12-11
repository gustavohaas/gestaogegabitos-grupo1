import styled from "styled-components";

export const StyledMenu = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 5px;
  }
`;

export const IconButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  color: var(--white);
`;
