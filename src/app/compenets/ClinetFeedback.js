"use client";
import { useContext } from "react";
import { feedbackContext } from "../FeedbackContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ClientOfFeedback() {
  const feedbacks = useContext(feedbackContext);
  console.log(feedbacks);

  const listOfFeedbacks = feedbacks.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div
          style={{
            height: "200px",
            width: "550px",

            transition: "transform 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
          className="bg-white flex gap-10 items-center justify-center relative"
        >
          <div
            className="bg-gray-100 "
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              height: "180px",
              width: "150px",
              position: "absolute",
              top: "30px",
              left: "20px",
            }}
          ></div>
          <div
            className="flex flex-col items-start "
            style={{
              position: "absolute",
              left: "200px",
              top: "30px",
            }}
          >
            <div
              className="font-normal"
              style={{
                overflow: "visible",
              }}
            >
              {item.detailsOfFeedback}
            </div>
            <div className=" text-2xl font-bold">{item.name}</div>
            <div className="text-blue-500">{item.job}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-96 bg-gray-300">
      <div className="text-4xl font-bold">Clients Feedbacks.</div>
      <hr className="w-15 font-extrabold text-4xl " />
      <Swiper
        style={{
          width: "1500px",
          display: "flex",
          justifyContent: "center",
        }}
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={5}
        slidesPerView={2.1}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {listOfFeedbacks}
      </Swiper>
    </div>
  );
}
