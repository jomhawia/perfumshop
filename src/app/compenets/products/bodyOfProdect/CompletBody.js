"use client";
import Button from "@mui/material/Button";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Review from "./Review";

export default function CompletBody() {
  const [data, setDate] = useState("ahmad Jomhawi");
  function handlDataToDescription() {
    setDate("ahmad Jomhawi");
  }
  function handlDataToReviews() {
    setDate(Review);
  }
  return (
    <div className="mt-20 flex flex-col gap-5">
      <div>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            size="large"
            style={{ color: "black" }}
            onClick={handlDataToDescription}
          >
            Description
          </Button>
          <Button
            size="large"
            style={{ color: "black" }}
            onClick={handlDataToReviews}
          >
            Reviews
          </Button>
        </ButtonGroup>
      </div>
      <hr />
      {/* <div>{data}</div> */}
      <Review />
    </div>
  );
}
