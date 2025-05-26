"use client";
import { createContext, useState, useContext } from "react";
import { ProductContext } from "./ProdectContext";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const products = useContext(ProductContext);

  const [news, setNews] = useState(() =>
    products.filter((product) => product.dateToAdd.slice(0, 4) === "2025")
  );

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};
