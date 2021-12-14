import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--black);
  border: 2px solid var(--darkgrey);
  border-radius: 10px;
  color: white;
  margin: 10px 0px 0 0;
  padding: 6px;
  transition: 0.5s;

  .searchIcon {
    margin-right: 5px;
    transform: translateY(1px);
  }

  .statsIcon {
    margin-right: 5px;
    transform: translateY(1px);
  }

  .listIcon {
    margin-right: 5px;
    transform: translateY(3px);
  }

  :hover {
    background-color: var(--darkgrey);
  }
`;
