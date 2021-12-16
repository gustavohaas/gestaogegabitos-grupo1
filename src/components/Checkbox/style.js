import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    width: 15px;
    height: 15px;
    background: #222;
    border-radius: 3px;
    display: flex;
    align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;
    width: 0px;
    height: 0px;
    margin: -1px;
    padding: 0;
`;

export const StyledCheckbox = styled.label`
    width: 15px;
    height: 15px;
    background: #222;
    border-radius: 3px;
    display: ${props => props.check ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;