"use client";
import { useState } from "react";
import Button from "@mui/material/Button";

const images = [
  { id: 0, src: "/image/perfume/ARMANI-removebg-preview.png" },
  { id: 1, src: "/image/perfume/SAUVAGE-removebg-preview.png" },
  { id: 2, src: "/image/perfume/YOU-removebg-preview.png" },
  { id: 3, src: "/image/perfume/blue_chanel-removebg-preview.png" },
];

export default function LeftBody() {
  const [count, setCount] = useState(0);

  function handleClickLeft() {
    if (count == 0) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  }
  function handleClickRight() {
    if (count == 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  console.log(count);
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 bg-gray-300" style={{ height: "500px" }}>
        <img
          className="justify-self-center align-middle"
          src={images[count].src}
          style={{ height: "400px" }}
        />
      </div>
      {images.map((image) => (
        <div
          className="bg-gray-300 max-h-48 cursor-pointer"
          key={image.id}
          style={{
            border: image.id === count ? "solid 2px blue" : "",
          }}
          onClick={() => setCount(image.id)}
        >
          <img src={image.src} className=" justify-self-center " style={{}} />
        </div>
      ))}
      <div className="flex gap-2 col-span-4">
        <Button className="bg-blue-900" onClick={handleClickLeft}>
          Left
        </Button>
        <Button className="bg-blue-900" onClick={handleClickRight}>
          Right
        </Button>
      </div>
    </div>
  );
}
