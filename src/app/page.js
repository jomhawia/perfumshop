"use client";
import "./globals.css";
import Slider from "./compenets/slider";
import Itemnew from "./compenets/Itemnwe";
import LatestNews from "./compenets/latest news";

export default function Home() {
  return (
    <>
      <div>
        <Slider />
        <Itemnew />
        <LatestNews />
      </div>
    </>
  );
}
