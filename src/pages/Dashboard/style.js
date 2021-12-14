import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    position: absolute;
    height: 56px;
    left: 14px;
    top: 79px;
    font-weight: 300;
  }

  .navContainer {
    width: 320px;
    display: flex;

    button {
      margin-right: 10px;
    }
  }
`;
