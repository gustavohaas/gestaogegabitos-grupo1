import styled, { css } from "styled-components";

export const Collapse = styled.button`
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    &:hover {
        background-color: #555;
    }
  ${(props) => {
        switch (props.collapsible) {
            case true:
                return css`
            &:after {
                content: "\2212";
            }
        `;
            default:
                return css`
            &:after {
                content: '\002B';
                color: white;
                font-weight: bold;
                float: right;
                margin-left: 5px;
            } 
        `;
        }
    }}
`;

export const Box = styled.div`
    padding: 0 18px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #f1f1f1;
    color: #000;
`;