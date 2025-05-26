"use client";
import { useState } from "react";
import Button from "@mui/material/Button";

import { ProductContext } from "@/app/ProdectContext";
import { useContext } from "react";

export default function LeftBody({ count, setCount }) {
  const products = useContext(ProductContext);

  console.log(count);

  function handleClickLeft() {
    if (count == 0) {
      setCount(products.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  function handleClickRight() {
    if (count == products.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <div
        className="col-span-4
          transition-all duration-300
            hover:scale-101"
        style={{
          height: "500px",
          transition: "transform 0.3s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <img
          className="justify-self-center align-middle"
          src={products[count].src}
          style={{ height: "400px", backgroundSize: "contain" }}
        />
      </div>

      {products.map((product) => (
        <div
          className=" 
           cursor-pointer
           hover:bg-[#f9f9f9]
           transition-all duration-300
            hover:scale-105
           bg-position-center
           bg-no-repeat
           h-50
           bg-contain
           bg-center"
          key={product.id}
          style={{
            border: "1px solid #ddd",

            border: product.id === count ? "solid 2px black" : "",
            backgroundImage: `url(${product.src})`,
            transition: "transform 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",

            display:
              product.id > count + 3 || product.id < count ? "none" : "block",
          }}
          onClick={() => setCount(product.id)}
        ></div>
      ))}
      <div className="flex gap-2 col-span-4">
        <Button
          variant="outlined"
          size="large"
          style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
          onClick={handleClickLeft}
        >
          ←
        </Button>
        <Button
          variant="outlined"
          size="large"
          style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
          onClick={handleClickRight}
        >
          →
        </Button>
      </div>
    </div>
  );
}
