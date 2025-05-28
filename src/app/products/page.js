"use client";
import HeaderOfProdect from "../compenets/products/HeaderOfProdect";
import LeftBody from "../compenets/products/bodyOfProdect/LeftBody";
import RightBody from "../compenets/products/bodyOfProdect/RightBody";
import CompletBody from "../compenets/products/bodyOfProdect/CompletBody";
import Container from "@mui/material/Container";
import LatestNews from "../compenets/latest news";
import { useState } from "react";

export default function Prodect() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <HeaderOfProdect />
      </div>
      <Container>
        <div className="flex gap-10 mt-10">
          <div className="w-1/2">
            <LeftBody count={count} setCount={setCount} />
          </div>
          <div className="w-1/2">
            <RightBody count={count} setCount={setCount} />
          </div>
        </div>
        <div>
          <CompletBody count={count} setCount={setCount} />
        </div>
        <div>
          <LatestNews />
        </div>
      </Container>
    </div>
  );
}
