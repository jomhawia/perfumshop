import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "OUD",
      price: 220,
      description: "Deep, woody scent perfect for evening wear.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/OUD-removebg-preview.png",
    },
    {
      id: 1,
      title: "SAUVAGE",
      price: 220,
      description: "long-lasting scent, perfect for day and night wear.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/SAUVAGE-removebg-preview.png",
    },
    {
      id: 2,
      title: "YOU",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/YOU-removebg-preview.png",
    },

    {
      id: 3,
      title: "BOWMORE",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/BOWMORE-removebg-preview.png",
    },
    {
      id: 4,
      title: "blue_chanel",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/blue_chanel-removebg-preview.png",
    },
    {
      id: 5,
      title: "DOLCE",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/DOLCE-removebg-preview.png",
    },

    {
      id: 6,
      title: "ARMANI",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/ARMANI-removebg-preview.png",
    },
    {
      id: 7,
      title: "Prageesh",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/Prageesh-removebg-preview.png",
    },

    {
      id: 8,
      title: "KAAL",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/KAAL-removebg-preview.png",
    },

    {
      id: 9,
      title: "REBERT",
      price: 220,
      description: "Fresh, bold fragrance with citrus and amber notes.",
      detail: "long-lasting scent, perfect for day and night wear.",
      src: "/image/perfume/rebert-removebg-preview.png",
    },
  ]);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
