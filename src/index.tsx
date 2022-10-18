import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import AuthProvider from "./modules/common/providers/AuthProvider";
import ScreenDimensionProvider from "./modules/common/providers/ScreenDimensionProvider";
import { THEME } from "./utils/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ScreenDimensionProvider>
          <ThemeProvider theme={THEME}>
            <App />
          </ThemeProvider>
        </ScreenDimensionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
