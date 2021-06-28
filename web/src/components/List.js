import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ListItem from "./ListItem.js";

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddList = styled.div`
  width: 95%;
  background-color: #0e918c;
  border-radius: 5px;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const AddListText = styled.textarea`
  height: 50px;
  resize: none;
  padding: 15px 15px;
  background-color: inherit;
  color: white;
  border: none;
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  outline: none;
  flex-grow: 1;

  &:focus {
    cursor: auto;
  }

  &::placeholder {
    color: white;
    opacity: 1;
  }
  &:focus::placeholder {
    opacity: 0;
  }

  &::-ms-input-placeholder {
    color: white;
  }
  &:focus::-ms-input-placeholder {
    color: transparent;
  }
`;

const Plus = styled.i`
  color: white;
  padding: 15px;
  cursor: pointer;
  font-size: 1.3rem;
`;


const List = () => {
  const tasks = [{ task: "Do the laundry" }, { task: "Buy fruits"}, { task: "Take out the dog" }];

  const [text, setText] = useState();
  const updateText = (event) => {
    setText(
      event.target.value
    )
  }

  function adjustHeight(el) {
    el.style.height = "50px";
    el.style.height = el.scrollHeight + "px";
  }

  function saveTask() {
    alert(text);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveTask();
    }
  }

  return (
    <Wrapper>
      <AddList>
        <AddListText
          placeholder="Add an element to your list"
          onInput={(e) => {adjustHeight(e.target); updateText(e);}}
          onKeyPress={(e) => {handleKeyPress(e)}}
        />
        <Plus>
          <FontAwesomeIcon icon={faPlus} onClick={saveTask}/>
        </Plus>
      </AddList>
      {tasks.map(task => (
        <ListItem message={task.task} />
      ))}
    </Wrapper>
  );
};

export default List;
