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

export const Header = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 300px;

  background: #0b0b0b;
  border: 1px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;

  div.buttonContainer {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  button.configBtn {
    width: 150px;
    margin: 5px;
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

export const GroupSearchContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    overflow: scroll;
`;

export const GroupSearchStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    

`;

export const GroupSearchList = styled.li`
    list-style: none;
    font-weight: 300;
    font-size: 16px;

`;

export const ListItemContainer = styled.span`
    display: flex;

`