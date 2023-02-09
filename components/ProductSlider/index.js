/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ProductSlideBox from "../ProductSlideBox";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useRef } from "react";
const index = () => {
  const sliderRef = useRef();
  const swiperCustome = (data) => {
    if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        sliderRef.current.scrollTo(
            sliderRef.current.scrollLeft+width*data,0
        )
    }
  };
  return (
    <section className="container mx-auto px-10 py-5 bg-[#818CF8]">
      <div className="flex items-center justify-between">
        <div className="border-r-4 text-white border-white pr-2 font-bold text-2xl border-solid">
          <h3>اپلیکیشن ها</h3>
        </div>
        <div className="flex justify-around items-center w-[15rem]">
          <div className="flex gap-x-4 text-2xl">
            <HiOutlineChevronRight onClick={()=>swiperCustome(1)} className="bg-white text-[#0000ff] rounded-lg w-10 h-10 hover:bg-[#0000ff] hover:text-white transition-all duration-500 cursor-pointer" />
            <HiOutlineChevronLeft onClick={()=>swiperCustome(-1)} className="bg-white text-[#0000ff] rounded-lg w-10 h-10 hover:bg-[#0000ff] hover:text-white transition-all duration-500 cursor-pointer" />
          </div>
          <p className="px-5 py-2 bg-[#F97316] text-white border-2 rounded-lg border-white border-solid font-bold transition-all duration-500 hover:bg-[#0000b2] hover:text-white cursor-pointer">
            دیدن همه
          </p>
        </div>
      </div>
      <div ref={sliderRef} className="sliderContainer overflow-x-scroll">
        <div className="flex items-center justify-start gap-5 py-8 mx-10">
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
          <ProductSlideBox />
        </div>
      </div>
    </section>
  );
};

export default index;
