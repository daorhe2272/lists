import React from "react";
import styled from "styled-components";

import Header from "./Header";
import PopUpBackground from "./PopUpBackground";

// Color palette used for the site's design:
// https://colorhunt.co/palette/213161

const Main = styled.main`
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 0;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <PopUpBackground />
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
