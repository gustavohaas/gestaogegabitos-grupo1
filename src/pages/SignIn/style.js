import styled from "styled-components";

// export const Container = styled.div`
//   max-width: 375px;
//   /* height: 812px; */
//   background-color: black;
//   color: #fff;
//   justify-content: center;

//   div {
//     /* background-color: #fff; */
//   }
//   /* .BtnSignUp {
//     background-color: black;
//     display: flex;
//     justify-content: space-between;
//   } */

//   button {
//     border: none;
//     background-color: inherit;
//     color: #fff;
//     font-weight: 800;
//     cursor: pointer;
//   }

//   form {
//     margin: auto;
//     justify-content: center;
//     align-items: center;
//   }
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    align-self: flex-start;
    h2 {
      font-weight: 300;
      margin-bottom: 4rem;
    }
  }

  form {
    label {
      display: flex;
      justify-content: space-between;
      font-weight: 300;
      padding-left: 10px;
      margin-top: 20px;

      span {
        font-size: small;
        color: var(--vivid-pink);
      }
    }

    div {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    button {
      margin-top: 4rem;
      font-weight: bold;
    }
  }

  button {
    margin-top: 15px;
  }

  svg {
    color: var(--darkgrey);
    /* margin-left: 5px; */
    margin-right: 10px;
  }

  .BtnSignUp {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-weight: 300;
    }

    a {
      color: var(--blue);
      padding-left: 10px;
    }
  }
`;
