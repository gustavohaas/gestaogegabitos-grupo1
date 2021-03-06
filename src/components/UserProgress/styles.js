import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--popup-color);
  width: 320px;
  height: 170px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 300;
    padding: 50px 0;
    text-align: center;
  }
`;
