import styled from "styled-components";

function Icon({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  background: ${(props) => props.background};
`;

export default Icon;
