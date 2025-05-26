"use clinte";
import FooterOfNews from "../compenets/news/FooterOfNews";

import HeaderOfNewes from "../compenets/news/HeaderOfNews";
import Container from "@mui/material/Container";

import BodyOfNews from "../compenets/news/BodyOfNews";
export default function News() {
  return (
    <div>
      <HeaderOfNewes />
      <Container
        maxWidth="lg"
        className="mt-10 flex items-start gap-10 justify-center"
      >
        <BodyOfNews />
        <FooterOfNews />
      </Container>
    </div>
  );
}
