import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--popup-color);
  width: 320px;
  border-radius: 10px;
  margin-bottom: 40px;

  h2 {
    font-weight: 300;
    padding: 10px 10px 0;
  }

  p {
    font-weight: 300;
    padding: 50px 0;
    text-align: center;
  }

  @media only screen and (min-width: 400px) and (max-width: 480px) {
    width: 350px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 550px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 650px;
  }

  @media only screen and (min-width: 1201px) {
    width: 750px;
  }
`;
