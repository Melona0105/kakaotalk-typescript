import ProfileProvider from "app/common/providers/ProfileProvider";
import ServiceProvider from "app/common/providers/ServiceProvider";
import { THEME } from "app/utils/theme/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./app/App";
import "./index.css";




const DEFAULT_STALE_TIME = 1000 * 60 * 5;
const DEFAULT_CACHE_TIME = 1000 * 60 * 5;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
      cacheTime: DEFAULT_CACHE_TIME,
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
