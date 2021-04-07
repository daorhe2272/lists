import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";

import MessageWRedirect from "./MessageWRedirect";
import PopUpBackground from "./PopUpBackground";
import { SIGNUP_USER } from "../gql/mutation";

const Container = styled.div`
  background-color: rgb(245, 245, 245);
  padding: 25px 35px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background-color: inherit;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 5px 7px;
  margin: 5px 0;
`;

const Button = styled.button`
  width: 130px;
  font-family: "RocknRoll One";
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: white;
  font-style: bold;
`;

const SignUpButton = styled(Button)`
  background-color: #f6830f;
`;

const CancelButton = styled(Button)`
  background-color: #bb2205;
`;

const SignUp = ({ cancelSignUp }) => {
  const [values, setValues] = useState();
  const [showSignUpMessage, setShowSignUpMessage] = React.useState(false);

  // Update the values state when a user types in the form
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const checkEmail = () => {
    try {
      let re = /\S+@\S+\.\S+/;
      if (re.test(values.email)) {
        return true;
      } else {
        alert("Please use a valid email");
        return false;
      }
    } catch {
      return false;
    }
  };

  const checkPwd = () => {
    try {
      if (values.password && values.password === values.repassword) {
        if (values.password.length > 7) {
          return true;
        } else {
          alert("Your password is too short")
        }
      } else {
        alert("Please verify that your password is typed correctly");
      }
    } catch {
      alert("Please make sure you filled in your data correctly.");
    }
  };

  const checkFields = () => {
    try {
      if (values.email && values.password && values.repassword && values.username) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  };

  const [signUpMutation] = useMutation(SIGNUP_USER, {
    onError: error => {
      console.log(error); // Remove for production
      alert("Whoops! An error occurred");
    },
    onCompleted: () => {
      setShowSignUpMessage(true);
    }
  });

  const doSignUp = (e) => {
    e.stopPropagation();
    if (checkFields() === true && checkPwd() === true && checkEmail() === true) {
      signUpMutation({ variables: values });
    } else {
      alert("Please make sure you filled in all fields correctly before signing up")
    }
  };

  let message = "Your account was successfully registered. To continue, please check the e-mail we sent you. It should arrive in a couple of minutes. If not, please check your spam folder.";

  return (

    <Container>
      { showSignUpMessage ? <PopUpBackground children={MessageWRedirect(message)} /> : null }
      <Input type="email" name="email" placeholder="E-mail address" onChange={onChange} />
      <Input type="text" name="username" placeholder="Full name" onChange={onChange} />
      <Input type="password" name="password" placeholder="Password" onChange={onChange} />
      <Input type="password" name="repassword" placeholder="Confirm password" onChange={onChange} />
      <SignUpButton onClick={doSignUp}>Sign Up</SignUpButton>
      <CancelButton onClick={cancelSignUp}>Cancel</CancelButton>
    </Container>
  );
};

export default SignUp;
