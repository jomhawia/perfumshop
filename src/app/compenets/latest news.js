"use client";
import LatestNew from "./latest new";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { NewsContext } from "@/app/NewsContext";

export default function LatestNews() {
  const { news } = useContext(NewsContext);

  const LatestNewsItem = news.map((item) => (
    <SwiperSlide key={item.id}>
      <LatestNew
        src={item.src}
        title={item.title}
        description={item.description}
        dateToAdd={item.dateToAdd}
      />
    </SwiperSlide>
  ));
  return (
    <div className="flex flex-col justify-center align-middle gap-5 ">
      <div className="flex flex-col justify-center align-middle items-center">
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Latest News
        </h1>
        <hr style={{ width: "11%" }} />
      </div>
      <div className="px-4 py-8">
        <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #e0e0e0 !important; /* Change this to your desired color */
            
            }
          `}
        </style>
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {LatestNewsItem}
        </Swiper>
      </div>
    </div>
  );
}
