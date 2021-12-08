import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --btn-rgba: linear-gradient(90deg, #fc466b 0%,#5c5ae5 103.5%,rgba(63, 94, 251, 0) 104.96%);
        --darkgrey: #222222;
        --white: #ffffff;
        --black:#000000;
        --popup-color: #0B0B0B;

    }

    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height:100vh;
        width: 100vw;

        font-family: "Roboto", serif ;
        font-size: 1rem;
    }
    input, button{
        font-size: 1rem;
        
    }

    button:hover{
        cursor: pointer;
    }

    h2,h3,h4{
        font-weight: 700;
    }

    a{
        text-decoration: none;
    }

`;
