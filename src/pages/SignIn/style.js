import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  /* height: 812px; */
  background-color: black;
  color: #fff;
  justify-content: center;

  div {
    background-color: #fff;
  }
  .BtnSignUp {
    background-color: black;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    background-color: inherit;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }

  form {
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;
