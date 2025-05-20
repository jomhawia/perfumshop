"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  { id: 0, src: "/image/perfume/OUD-removebg-preview.png" },
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
      <div
        className="col-span-4"
        style={{ height: "500px", backgroundColor: "#e0e0e0" }}
      >
        <img
          className="justify-self-center align-middle"
          src={images[count].src}
          style={{ height: "400px", backgroundSize: "contain" }}
        />
      </div>

      {images.map((image) => (
        <div
          className=" max-h-48 cursor-pointer flex justify-center items-center"
          key={image.id}
          style={{
            backgroundColor: "#e0e0e0",
            border: image.id === count ? "solid 2px black" : "",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          onClick={() => setCount(image.id)}
        >
          <img src={image.src} className="" style={{}} />
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
