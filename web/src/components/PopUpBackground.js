import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  display: none;
  justify-content: center;
  align-items: center;
`;

const PopUpBackground = () => {
  return (
    <Background />
  );
};

export default PopUpBackground;
