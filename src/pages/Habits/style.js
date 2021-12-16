import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 10px auto;
  padding-bottom: 5px;

  h1 {
    font-weight: 300;
    font-size: 1.3rem;
    margin: 0 10px 20px;
  }

  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    input {
      padding-left: 10px;
    }

    div {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto;

      span {
        font-weight: 300;
      }
      select {
        width: 100px;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 300;
        padding: 5px;
        border: 1px solid var(--darkgrey);
        border-radius: 10px;
        background-color: var(--popup-color);
        color: var(--white);
      }
    }

    button + button {
      margin-left: 5px;
    }

    //add button
    button {
      width: 50%;
      margin: 2px 0;
    }

    .cancelButton {
      background: var(--darkgrey);
    }
  }
`;

export default Container;
