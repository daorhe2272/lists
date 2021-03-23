import { gql } from "@apollo/client";

const SIGNUP_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password)
  }
`;

export {
  SIGNUP_USER
};
