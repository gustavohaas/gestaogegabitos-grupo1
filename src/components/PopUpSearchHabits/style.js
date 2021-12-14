import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #05041980;

  top: 0;
  left: 0;
`;

export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 150px;

  background: #0b0b0b;
  border: 1px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;

  div {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  div.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;

    input {
      border: 1px solid #222222;
      padding: 5px;
      width: 170px;
      height: 35px;
      border-radius: 10px;
    }
  }

  button.searchBtn {
    width: 100px;
    margin: 5px;
    height: 35px;
  }

  button.greyBtn {
    color: grey;
    font-weight: 700;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    text-align: center;

    :hover {
      background: red;
      border: none;
      color: white;
    }
  }
`;
