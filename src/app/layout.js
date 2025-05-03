"use client";
import * as React from "react";
import "./globals.css";
import Header from "./compenets/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A9A9A9",
    },
    secondary: {
      main: "#b28900",
    },
    customColor: {
      main: "#ff5722", // Example of a custom color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
