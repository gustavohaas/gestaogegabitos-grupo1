import styled from "styled-components";

export const StyledMenu = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 5px;
  }
`;

export const PersonalButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  color: ${(props) => (props.personalColorScheme ? "#5c5ae5" : "#ffffff")};
  /* transition: 0.5s;
  :hover {
    color: var(--purple-blue);
  } */
`;

export const GroupsButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  color: ${(props) => (props.groupsColorScheme ? "#5c5ae5" : "#ffffff")};
  /* :hover {
    color: var(--purple-blue);
  } */
`;
