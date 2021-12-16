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
`;

export const EditProfileButton = styled.button`
  background: var(--black);
  border-radius: 10px;
  border-style: none;
  color: ${(props) => (props.colorScheme ? "#5c5ae5" : "#ffffff")};
`;
