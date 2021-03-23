import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  min-width: 150px;
  width: 20%;
  background-color: #f6830f;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "RocknRoll One", sans-serif;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  width: 100%;
  padding: 6px 8px 6px 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AddButton = styled.button`
  background-color: #bb2205;
  border: none;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "RocknRoll One";
  cursor: pointer;
  padding: 10px 8px 10px 12px;
  text-align: left;
`;

const UserButton = styled(Button)`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 10px 0;
 font-size: 1.2rem;
`;

const UserIcon = styled.div`
  padding-right: 8px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

const Navigation1 = () => {
  const displayUserMenu = () => {
    window.location.href="/settings";
  };
  const showInbox = () => {
    alert("Displaying Inbox");
  };
  const showToday = () => {
    alert("Displaying Today list");
  };
  const showWeek = () => {
    alert("Displaying This Week list");
  };

  return (
    <Wrapper>
      <Nav>
        <UserButton onClick={displayUserMenu}>
          <UserIcon><FontAwesomeIcon icon={faUserCircle}/></UserIcon>
          User Name
        </UserButton>
        <Button onClick={showInbox}>Inbox</Button>
        <Button onClick={showToday}>Today</Button>
        <Button onClick={showWeek}>This Week</Button>
      </Nav>
      <AddButton>+ Create List</AddButton>
    </Wrapper>
  );
};

export default Navigation1;
