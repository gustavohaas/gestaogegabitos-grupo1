import styled from "styled-components";

export const Container = styled.div``;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;

  h2 {
    font-weight: 300;
    position: fixed;
    top: 70px;
  }

  .overviewButton {
    margin-right: 10px;
  }
`;
