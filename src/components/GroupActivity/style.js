import styled from "styled-components";

export const StyleList = styled.li`
    list-style: none;
    margin-left: 10px;
    font-weight: 300;
    font-size: 16px;
    width: 256px;
`

export const StyleListContainer = styled.div`
    display: flex;
    align-items: center;
`

export const HabitBtn = styled.button`
    width: 35px;
    height: 35px;
    background: var(--black);
    color: var(--white);
    border: 2px solid #222222;
    box-sizing: border-box;
    border-radius: 10px;
`;