import styled from "styled-components";

export const Table = styled.table`
    margin: 42px auto;
    display: block;
    overflow-x: auto;
    border-spacing: 0;
    th, td {
        border: 1px solid;
        text-align: center;
    }
`;

export const HabitBtn = styled.button`
    width: 35px;
    height: 35px;
    background: var(--black);
    color: var(--white);
    border: 2px solid #222222;
    box-sizing: border-box;
    border-radius: 10px;
`;