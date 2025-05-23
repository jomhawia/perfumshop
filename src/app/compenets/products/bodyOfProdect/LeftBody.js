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
        className="col-span-4"
        style={{ height: "500px", backgroundColor: "#e0e0e0" }}
      >
        <img
          className="justify-self-center align-middle"
          src={products[count].src}
          style={{ height: "400px", backgroundSize: "contain" }}
        />
      </div>

      {products.map((product) => (
        <div
          className=" max-h-48 cursor-pointer flex justify-center items-center bg-size-contain bg-no-repeat bg-center"
          key={product.id}
          style={{
            backgroundColor: "#e0e0e0",
            border: product.id === count ? "solid 2px black" : "",

            display:
              product.id > count + 3 || product.id < count ? "none" : "block",
          }}
          onClick={() => setCount(product.id)}
        >
          <img src={product.src} />
        </div>
      ))}
      <div className="flex gap-2 col-span-4">
        <Button
          className=""
          style={{ color: "black" }}
          onClick={handleClickLeft}
        >
          Left
        </Button>
        <Button
          className=""
          style={{ color: "black" }}
          onClick={handleClickRight}
        >
          Right
        </Button>
      </div>
    </div>
  );
}
