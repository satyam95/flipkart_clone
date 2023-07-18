import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

import CategoryProductCarouselCard from "./CategoryProductCarouselCard";

const CategoryProductCarousel = () => {
  return (
    <div className="my-2 bg-white rounded">
      <div className="border-b border-[#0000001a]">
        <div className="px-5 py-4 items-center flex justify-between">
          <div className="text-[22px] leading-[32px] font-medium text-[#212121]">
            Laptop
          </div>
          <div>
            <button className="bg-[#2874f0] text-white shadow-[0_2px_4px_0_rgba(0,0,0,.2)] text-[13px] font-medium leading-4 px-5 py-3 uppercase rounded-sm">
              View all
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProductCarouselCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryProductCarousel;
