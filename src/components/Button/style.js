import styled from "styled-components";

export const Btn = styled.button`
  background: linear-gradient(
    90deg,
    #fc466b 0%,
    #5c5ae5 103.5%,
    rgba(63, 94, 251, 0) 104.96%
  );
  border: 1px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  color: var(--white);
  width: 343px;
  height: 48px;
  cursor: pointer;

  :hover {
    filter: brightness(1.1);
`;
