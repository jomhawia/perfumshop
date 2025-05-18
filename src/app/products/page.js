import HeaderOfProdect from "../compenets/products/HeaderOfProdect";
import LeftBody from "../compenets/products/bodyOfProdect/LeftBody";
import RightBody from "../compenets/products/bodyOfProdect/RightBody";
import CompletBody from "../compenets/products/bodyOfProdect/CompletBody";
import Container from "@mui/material/Container";

export default function Prodect() {
  return (
    <div>
      <div>
        <HeaderOfProdect />
      </div>
      <Container>
        <div className="flex gap-10 mt-20">
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
      </Container>
    </div>
  );
}
