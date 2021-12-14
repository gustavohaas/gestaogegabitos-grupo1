import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--popup-color);
  width: 320px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .searchInput {
      /* height: 10px; */
      /* padding-top: 10px; */
  }

  svg {
    margin-right: 10px;
    color: var(--darkgrey);
  }

  p {
    font-weight: 300;
    padding: 50px 0;
    text-align: center;
  }
`;
