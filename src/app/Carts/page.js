"use client";
import HeaderOfCart from "../compenets/Cart/HeaderOfCart";
import BodyCart from "../compenets/Cart/BodyCart";
import FooterOfCart from "../compenets/Cart/FooterOfCart";
import Container from "@mui/material/Container";

export default function Carts() {
  return (
    <div>
      <HeaderOfCart />
      <Container>
        <BodyCart />
        <FooterOfCart />
      </Container>
    </div>
  );
}
