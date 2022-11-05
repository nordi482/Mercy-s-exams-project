import Styled from "styled-components";

function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = Styled.button` 
  background: #1B1B2D;
  text-transform: uppercase;
  letter-spacing:0.2rem;
  width: 270px;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  border-radius: 15px;
  margin:14px;
`;

export default Button;
