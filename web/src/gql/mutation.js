import { gql } from "@apollo/client";

const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password)
  }
`;

export {
  SIGNIN_USER,
  SIGNUP_USER
};
