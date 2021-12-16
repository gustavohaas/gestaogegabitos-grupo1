import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: var(--popup-color);
  width: 300px;
  margin: 20px auto 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted #222222;

  svg {
    margin-right: 10px;
    color: var(--darkgrey);
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

export const Container = styled.div`
  background-color: var(--popup-color);
  width: 300px;
  /* border-radius: 10px; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  overflow: auto;
  height: 300px;
  padding-top: 10px;
  padding-bottom: 10px;

  p {
    font-weight: 300;
    padding: 130px 0;
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
