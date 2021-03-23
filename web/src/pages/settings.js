import React, { useEffect } from "react";
import styled from "styled-components";

import Navigation1 from "../components/Navigation1";
import SettingsMenu from "../components/SettingsMenu";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Settings = () => {
  useEffect(() => {
    document.title = "Settings | Awesome Lists"
  });

  return (
    <Wrapper>
      <Navigation1 />
      <SettingsMenu />
    </Wrapper>
  );
};

export default Settings;
