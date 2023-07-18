import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FullBannerCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[150px] md:h-[233.5px]">
            <Image
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/85065925cbc15b54.png"
              alt="image"
              fill={true}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[150px] md:h-[233.5px]">
            <Image
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/85065925cbc15b54.png"
              alt="image"
              fill={true}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FullBannerCarousel;
