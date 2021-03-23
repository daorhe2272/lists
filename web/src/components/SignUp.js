import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";

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
  useEffect(() => {
    document.title = "Sign Up | Awesome Lists";
  });
  const [values, setValues] = useState();
  // Update the state when a user types in the form
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const checkEmail = () => {return false;};

  const checkPwd = () => {return false;};

  const [signUpMutation] = useMutation(SIGNUP_USER, {
    onError: error => {console.log(error);},
    onCompleted: data => {
      console.log(data);
    }
  });

  const doSignUp = () => {
    if (checkEmail() === true && checkPwd() === true) {
      signUpMutation({ variables: values });
    } else {
      alert("Please verify that you have a valid e-mail and password.")
    }
  };

  return (
    <Container>
      <Input type="email" name="email" placeholder="E-mail address" onChange={onChange} />
      <Input type="text" name="username" placeholder="Full name" onChange={onChange} />
      <Input type="password" name="password" placeholder="Password" onChange={onChange} />
      <Input type="password" name="re-password" placeholder="Confirm password" />
      <SignUpButton onClick={doSignUp}>Sign Up</SignUpButton>
      <CancelButton onClick={cancelSignUp}>Cancel</CancelButton>
    </Container>
  );
};

export default SignUp;
