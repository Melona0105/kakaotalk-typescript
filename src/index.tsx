import ServiceProvider from "app/modules/common/providers/ServiceProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./app/App";
import ProfileProvider from "./app/modules/common/providers/ProfileProvider";
import { THEME } from "./app/utils/theme/theme";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5, // default cache time
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <ServiceProvider>
            <ProfileProvider>
              <App />
            </ProfileProvider>
          </ServiceProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

Modal.setAppElement("#root");
