import styled from "styled-components";

const Container = styled.div`
  width: 100% auto;
  margin: 10px;
  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  input {
    padding-left: 5px;
  }
  div {
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    select {
      width: 100px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
`;


export default Container;