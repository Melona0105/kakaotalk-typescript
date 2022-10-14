import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import ScreenDimensionProvider from "./common/providers/ScreenDimensionProvider";
import "./index.css";
import { THEME } from "./utils/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenDimensionProvider>
        <ThemeProvider theme={THEME}>
          <App />
        </ThemeProvider>
      </ScreenDimensionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
