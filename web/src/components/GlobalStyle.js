import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, html, #root, #root>div {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgba(0, 0, 0, 0.05);
  }

  h1 {
    margin: 0;
  }
`;
