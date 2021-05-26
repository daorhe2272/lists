import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem.js";

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddList = styled.button`
  width: 95%;
  background-color: #0e918c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 15px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;


const List = () => {
  const tasks = [{ task: "Do the laundry" }, { task: "Buy fruits"}, { task: "Take out the dog" }];
  return (
    <Wrapper>
      <AddList>+ Add an element to your list</AddList>
      {tasks.map(task => (
        <ListItem message={task.task} />
      ))}
    </Wrapper>
  );
};

export default List;
