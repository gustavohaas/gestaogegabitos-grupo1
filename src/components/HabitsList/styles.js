import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--popup-color);
  width: 300px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  overflow: auto;
  max-height: 380px;
  padding-bottom: 10px;

  div {
    /* margin-bottom: 10px; */
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

  /* 
320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV */

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
