"use client";
import "@/app/cssfile/news.css";
import Latestnew from "../latest new";
import { useContext } from "react";
import { NewsContext } from "@/app/NewsContext";

export default function BodyOfNews() {
  const { news } = useContext(NewsContext);
  console.log(news);
  const latestNews = news.map((item) => (
    <div
      className="w-full hover:scale-105 transition-all duration-300"
      key={item.id}
    >
      <Latestnew
        key={item.id}
        title={item.title}
        description={item.description}
        src={item.src}
        dateToAdd={item.dateToAdd}
      />
    </div>
  ));
  return <div className="news grid grid-cols-3  gap-3 p-5 ">{latestNews}</div>;
}
