"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
SwiperCore.use([Autoplay]);

const index = () => {
  return (
      <section className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
          className="flex justify-center items-center"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <Image alt="slider Image" width={1320} height={320} src={"/images/slider/slide1.jpg"} className="rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <Image alt="slider Image" width={1320} height={320} src={"/images/slider/slide2.jpg"} className="rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <Image alt="slider Image" width={1320} height={320} src={"/images/slider/slide3.jpg"} className="rounded-lg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
  );
};

export default index;
