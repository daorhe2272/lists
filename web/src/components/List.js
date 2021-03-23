import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddList = styled.button`
  width: 97%;
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  margin-top: 8px;
  font-family: sans-serif;
  font-size: 1.1rem;
  text-align: left;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;


const List = () => {
  return (
    <Wrapper>
      <AddList>+ Add an element to your list</AddList>
    </Wrapper>
  );
};

export default List;
