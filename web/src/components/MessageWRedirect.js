import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 1.1rem;
`;

const Text = styled.div`
  width: 100%;
  font-family: "Roboto";
`;

const Button = styled.button`
  background-color: #bb2205;
  color: white;
  border: none;
  border-radius: 5px;
  font-style: bold;
  padding: 5px 0;
  width: 100px;
  cursor: pointer;
  font-family: "RocknRoll One";
`;

const MessageWRedirect = (message) => {
  const redirect = (e) => {
    e.stopPropagation();
    window.location.replace("/");
  }

  return (
    <Container>
      <Text>{message}</Text>
      <Button onClick={redirect}>Close</Button>
    </Container>
  );
};

export default MessageWRedirect;
