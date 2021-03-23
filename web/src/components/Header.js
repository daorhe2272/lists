import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserPlus, faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";

const HeaderBar = styled.header`
  width: 100%;
  min-height: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  background-color: #0e918c;
`;

const MenuBar = styled.div`
  font-family: "RocknRoll One", sans-serif;
  font-size: 1.4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  min-width: 150px;
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const MenuButton = styled.div`
  margin: 0 10px;
  display: flex;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const ListBar = styled.div`
  font-size: 1.2rem;
  color: white;
  font-family: "RocknRoll One", sans-serif;
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const ListName = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
  height: 100%;
  padding: 0 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ListOptions = styled.div`
  margin-right: 15px;
  display: flex;
`;

const ListButton = styled.button`
  cursor: pointer;
  border: none;
  margin: 7px 5px;
  background-color: inherit;
  color: white;
  padding: 0 12px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Header = () => {
  return (
    <HeaderBar>
      <MenuBar>
        <MenuButton>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </MenuBar>
      <ListBar>
        <ListName>Inbox</ListName>
        <ListOptions>
          <ListButton>
            <FontAwesomeIcon icon={faUserPlus} />
          </ListButton>
          <ListButton>
            <FontAwesomeIcon icon={faSortAlphaDown} />
          </ListButton>
        </ListOptions>
      </ListBar>
    </HeaderBar>
  );
};

export default Header;
