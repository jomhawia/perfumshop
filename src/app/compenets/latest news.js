import LatestNew from "./latest new";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const latestNews = [
  {
    id: 1,
    auther: "Latest News",
    title: "Stay updated with the latest news and trends in the industry.",
    imageUrl: "image/blue_chanel-removebg-preview.png",
  },
  {
    id: 2,
    auther: "Breaking News",
    title: "Get the latest breaking news from around the world.",
    imageUrl: "image/blue_chanel-removebg-preview.png",
  },
  {
    id: 3,
    auther: "Technology Updates",
    title: "Discover the latest advancements in technology ahmad.",
    imageUrl: "image/blue_chanel-removebg-preview.png",
  },
  {
    id: 4,
    auther: "ahmad jomhawi",
    title: "Discover the latest advancements in technology ahmad.",
    imageUrl: "image/blue_chanel-removebg-preview.png",
  },
];

const LatestNewsItem = latestNews.map((news) => (
  <SwiperSlide>
    <LatestNew
      key={news.id}
      imageUrl={news.imageUrl}
      auther={news.auther}
      title={news.title}
      date={news.date}
    />
  </SwiperSlide>
));

export default function LatestNews() {
  return (
    <div
      className="flex flex-col justify-center align-middle gap-5 "
      style={{}}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          margin: "10px auto 0px auto",
        }}
      >
        Latest News
      </h1>
      <hr style={{ width: "11%", margin: "0px auto" }} />
      <div className="px-4 py-8">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <div className="flex justify-center align-middle gap-5 flex-wrap items-center">
            {LatestNewsItem}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
