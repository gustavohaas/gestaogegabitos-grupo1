import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--darkgrey);
  width: 90%;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 0;
  transition: 0.3s;

  div {
    display: flex;
    align-items: center;

    h5 {
      font-weight: 300;
      font-size: 1rem;
    }
  }

  :hover {
    filter: brightness(1.5);
  }
`;
