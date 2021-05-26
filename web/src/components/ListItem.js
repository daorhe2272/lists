import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const ItemContainer = styled.div`
  width: 95%;
  background-color: white;
  border-radius: 5px;
  padding: 15px 15px;
  font-family: sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  margin-bottom: 4px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
`;

const Icon = styled.span`
  margin-right: 8px;
  color: grey;
`;

const ListItem = ({ message }) => {
  return (
    <ItemContainer>
      <Icon><FontAwesomeIcon icon={faSquare} /></Icon>
      {message}
    </ItemContainer>
  )
};
 export default ListItem;
