import React from "react";
import styled from "styled-components";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e918c;
`;

const Container = styled.div`
  background-color: rgb(245, 245, 245);
  width: 400px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 35px 30px;
`;

const Buttons = styled.div`

`;

const Button = styled.button`
  border: none;
  background-color: rgba(246, 131, 15, 1.0);
  border-radius: 5px;
  padding: 5px 0;
  width: 120px;
  margin: 3px 7px;
  color: white;
  font-family: "RocknRoll One", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
`;

const Welcome = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  text-align: center;
`;

const SignMenu = () => {
  React.useEffect(() => {
    document.title = "Awesome Lists";
  });
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showSignIn, setShowSignIn] = React.useState(false);
  const [showSignMenu, setShowSignMenu] = React.useState(true);

  const signUpClick = () => {
    setShowSignUp(true);
    setShowSignMenu(false);
  };
  const signInClick = () => {
    setShowSignIn(true);
    setShowSignMenu(false);
  };
  const cancelSignUp = () => {
    setShowSignUp(false);
    setShowSignMenu(true);
  }
  const cancelSignIn = () => {
    setShowSignIn(false);
    setShowSignMenu(true);
  };

  return (
    <Wrapper>
      { showSignMenu ?
        <Container>
          <Welcome>Welcome to <b>Awesome Lists</b>. To begin, sign in or create your account.</Welcome>
          <Buttons>
            <Button onClick={signInClick}>Sign In</Button>
            <Button onClick={signUpClick}>Sign Up</Button>
          </Buttons>
        </Container>
      : null }
      { showSignUp ? <SignUp cancelSignUp={cancelSignUp} /> : null }
      { showSignIn ? <SignIn cancelSignIn={cancelSignIn} /> : null }
    </Wrapper>
  );
};

export default SignMenu;
