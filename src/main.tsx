import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  alpha,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import UserProvider from "./context/UserProvider.tsx";
import { BrowserRouter } from "react-router-dom";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#512B81",
      },
      secondary: {
        main: "#7d2b81",
      },
      action: {
        hover: alpha("#512B81", 0.3),
      },
    },
  }),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
