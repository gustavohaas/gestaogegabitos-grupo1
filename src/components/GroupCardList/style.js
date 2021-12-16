import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 90%;
  background-color: #05041980;
  overflow: scroll;
`;

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
    margin-left: 10px;

    h5 {
      font-weight: 300;
      font-size: 1rem;
    }
  }

  :hover {
    filter: brightness(1.5);
  }
`;