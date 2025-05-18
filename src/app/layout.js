"use client";
import * as React from "react";
import "./globals.css";
import Header from "./compenets/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./compenets/Footer";

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
      <body className="bg-gray-100 ">
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
