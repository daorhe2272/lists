import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpBackground = ({ children }) => {
  return (
    <Background>
      { children }
    </Background>
  );
};

export default PopUpBackground;
