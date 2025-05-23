"use client";
import * as React from "react";
import "./globals.css";
import Header from "./compenets/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./compenets/Footer";
import { ProductProvider } from "./ProdectContext";
import { CartProvider } from "./CartsProdectContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4F4F4",
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
        <ProductProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
