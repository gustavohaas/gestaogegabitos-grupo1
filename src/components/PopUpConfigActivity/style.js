import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.7);

  top: 0;
  left: 0;
`;

export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 198px;

  background: #0b0b0b;
  border: 1px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;

  div {
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

export const ContainerInput = styled.div`
  width: 90%;
  height: 48px;
  background: var(--popup-color);
  border: 2px solid var(--darkgrey);
  box-sizing: border-box;
  border-radius: 12px;
`;

export const InputStyled = styled.input`
  background-color: var(--popup-color);
  border-style: none;
  border-radius: 5px;
  border: none;
  color: var(--white);
  margin: 5px;
  padding: 5px;
  width: 100%;
  height: 100%;
`;