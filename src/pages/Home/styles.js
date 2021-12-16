import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: monospace;
    margin-bottom: 4rem;
  }

  div {
    display: flex;
    width: 300px;
  }

  button {
    font-weight: bold;
    height: 40px;
  }

  button + button {
    margin-left: 10px;
  }
`;
