import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;

  h3 {
    font-weight: 500;
  }
`;

export const EditProfileButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  /* transform: translateX(10px); */
  color: ${(props) => (props.colorScheme ? "#5c5ae5" : "#ffffff")};
  transition: 0.5s;

  &:hover {
    color: #5c5ae5;
  }
`;
