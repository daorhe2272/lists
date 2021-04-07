import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";

import { SIGNIN_USER } from "../gql/mutation";

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
  font-family: "RocknRoll One", sans-serif;
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 0;
  font-style: bold;
  cursor: pointer;
`;

const SignInButton = styled(Button)`
  background-color: #f6830f;
`;

const CancelButton = styled(Button)`
  background-color: #bb2205;
`;

const SignIn = ({ cancelSignIn }) => {
  const [values, setValues] = React.useState();

  // Update the values state when a user types in the form
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const checkFields = () => {
    try {
      if (values.email && values.password) {
        return true;
      } else {
        alert("Please fill in all the required fields");
        return false;
      }
    } catch {
      alert("Please fill in all the required fields")
      return false;
    };
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
      alert("Whoops! An error occurred. Please try again later")
      return false;
    }
  };

  const [signInMutation] = useMutation(SIGNIN_USER, {
    onError: (error) => {
      console.log(error); // Remove for production
      alert("Whoops! An error occurred. Please try again later");
    },
    onCompleted: (data) => {
      // Store the token
      localStorage.setItem("token", data.signIn);

      // Redirect to home page
      window.location.replace("/");
    }
  });

  const doSignIn = (e) => {
    e.stopPropagation();
    if (checkFields() === true && checkEmail() === true) {
      signInMutation({ variables: values });
    }
  };

  return (
    <Container>
      <Input type="email" name="email" placeholder="E-mail address" onChange={onChange} />
      <Input type="password" name="password" placeholder="Password" onChange={onChange} />
      <SignInButton onClick={doSignIn}>Sign In</SignInButton>
      <CancelButton onClick={cancelSignIn}>Cancel</CancelButton>
    </Container>
  );
};

export default SignIn;
