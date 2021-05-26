import { gql } from "@apollo/client";

const GET_ME = gql`
  query me {
    id
    username
  }
`;

export {
  GET_ME
};
