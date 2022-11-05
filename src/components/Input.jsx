import styled from "styled-components";

function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  height: 3rem;
  padding: 1rem;
  margin: 7px;
  border: none;
  border-radius: 15px;
  outline: none;
  width: 270px;
  color: #3c354e;
  font-size: 12px;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(1);
    border-radius: 12px;
  }
  &::placeholder {
    color: #b9abe0;
    font-weight: 100;
    font-size: 12px;
  }
`;

export default Input;
