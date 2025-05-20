"use client";
import HeaderOfProdect from "../compenets/products/HeaderOfProdect";
import LeftBody from "../compenets/products/bodyOfProdect/LeftBody";
import RightBody from "../compenets/products/bodyOfProdect/RightBody";
import CompletBody from "../compenets/products/bodyOfProdect/CompletBody";
import Container from "@mui/material/Container";
import LatestNews from "../compenets/latest news";

export default function Prodect() {
  return (
    <div>
      <div>
        <HeaderOfProdect />
      </div>
      <Container>
        <div className="lg:flex gap-10 mt-20 md:flex-row">
          <div>
            <LeftBody />
          </div>
          <div>
            <RightBody />
          </div>
        </div>
        <div>
          <CompletBody />
        </div>
        <div>
          <LatestNews />
        </div>
      </Container>
    </div>
  );
}
