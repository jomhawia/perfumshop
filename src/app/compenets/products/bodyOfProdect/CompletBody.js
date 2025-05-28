"use client";
import Button from "@mui/material/Button";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Review from "./Review";
import { useContext } from "react";
import { ProductContext } from "@/app/ProdectContext";

export default function CompletBody({ count, setCount }) {
  const products = useContext(ProductContext);
  const [data, setDate] = useState();
  function handlDataToDescription() {
    setDate(0);
  }
  function handlDataToReviews() {
    setDate(1);
  }
  return (
    <div className="mt-20 flex flex-col gap-5">
      <div>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            size="large"
            style={{
              backgroundColor: "white",
              color: "black",
              backgroundColor: data === 0 ? "#909090" : "white",
            }}
            onClick={handlDataToDescription}
          >
            Description
          </Button>
          <Button
            size="large"
            style={{
              backgroundColor: "white",

              color: "black",
              backgroundColor: data === 1 ? "#909090" : "white",
            }}
            onClick={handlDataToReviews}
          >
            Reviews
          </Button>
        </ButtonGroup>
      </div>
      <hr />
      <div
        style={{
          display: data === 0 ? "block" : "none",
        }}
      >
        {products[count].detail}
      </div>
      <div style={{ display: data === 1 ? "block" : "none" }}>
        <Review />
      </div>
    </div>
  );
}
