import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    position: absolute;
    height: 56px;
    left: 14px;
    top: 79px;
    font-weight: 300;
  }

  .navContainer {
    width: 320px;
    display: flex;

    button {
      margin-right: 10px;
    }
    /* justify-content: space-between; */
  }
`;

/* nav {
    justify-content: space-between;
    position: absolute;
    top: 181px;
    left: 0;
    padding: 10px;
    button {
      margin: auto 7px;
    }
    button.day {
      width: 85px;
      height: 35px;
      box-sizing: border-box;
      background: #222222;
      color: var(--white);
      border: 2px solid #222222;
      box-sizing: border-box;
      border-radius: 10px;
    }
    button.ellipsis {
      width: 35px;
      height: 35px;
      background: var(--black);
      color: var(--white);
      border: 2px solid #222222;
      box-sizing: border-box;
      border-radius: 10px;
    }
    button.search {
      background: var(--black);
      color: var(--white);
      border-style: none;
      border-radius: 10px;
      width: 35px;
      height: 35px;
    }
  }
  footer {
    bottom: 0;
    left: 0;
    position: fixed;
    justify-content: space-evenly;
    button {
      width: 48px;
      height: 48px;
    }
  }
  button:hover {
    filter: brightness(1.5);
  }
`; 

/* export const IconButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  color: var(--white);
`; */
