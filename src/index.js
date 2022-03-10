import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import UserContextProvider from "./store/userContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Caveat', Open-Sans, Helvetica, Sans-Serif;
  }
`;

ReactDOM.render(
  <>
    <UserContextProvider>
      <GlobalStyle />
      <App />
    </UserContextProvider>
  </>,
  document.getElementById("root")
);
