import "./styles.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {
  const FaceBookBackground = "#1B1B2D";
  const InstagramBackground = "#1B1B2D";
  const TwitterBackground = "#1B1B2D";

  return (
    <MainContainer>
      <WelcomeText>Welcome Back!!!</WelcomeText>
      <InputContainer>
        <Input type={Text} placeholder="Email" />
        <Input type={Text} placeholder="password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Log In" />
      </ButtonContainer>
      <LoginWith> or Login With</LoginWith>
      <HorizontalRule></HorizontalRule>
      <IconsContainer>
        <Icon color={FaceBookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 80vw;
  background: rgba(217, 217, 217, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 12px;
  backdrop-filter: blur(8.5px);
  color: #ffffff;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  /* @media only screen and (min-width: 360px) {
    width: 80px;
    height: 90vh;
    hr {
      margin: 0.3rem;
    }

    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80px;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80px;
    height: 80vh;
  } */
  @media only screen and (min-width: 1024px) {
    width: 40vw;
    height: 65vh;
  }
  hr {
    margin: 0.3rem;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: #1b1b2d;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 8px;
  width: 50%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  margin: 40px;
`;

export default App;
