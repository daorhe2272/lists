import React from "react";
import styled from "styled-components";

import Navigation1 from "../components/Navigation1";
import List from "../components/List";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <Navigation1 />
      <List />
    </Wrapper>
  );
};
 export default Home;
