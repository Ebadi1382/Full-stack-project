"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);
import GraphicslideBox from "../GraphicslideBox";
const index = () => {
  return (
    <section className="container mx-auto flex-col items-center justify-between bg-[#FACC15] p-10 h-[42rem]">
      <div className="container px-10 py-4 mx-auto flex justify-between items-center">
        <p className="text-xl font-bold border-r-4 border-solid border-black pr-2">فایل های گرافیکی</p>
        <p className="px-4 py-2 bg-[#6366F1] text-white border-2 border-solid border-white rounded-lg font-medium hover:bg-white hover:text-[#6366F1] hover:border-[#6366F1] transition-all duration-300">
          دیدن همه
        </p>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
        className="flex justify-center items-center"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <GraphicslideBox />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default index;
