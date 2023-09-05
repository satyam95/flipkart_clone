"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Grid, Navigation } from "swiper/modules";

import CategoryProductCarouselCard from "./CategoryProductCarouselCard";
import { getProducts } from "@/hooks/getProducts";
import Link from "next/link";

interface ProductCarouselTypes {
  title: string;
  categorySlug: string;
}

const CategoryProductCarousel = ({
  title,
  categorySlug,
}: ProductCarouselTypes) => {
  const { data, isLoading } = getProducts(categorySlug);
  return (
    <div className="my-2 bg-white rounded">
      <div className="border-b border-[#0000001a]">
        <div className="px-5 py-4 items-center flex justify-between">
          <div className="text-[22px] leading-[32px] font-medium text-[#212121]">
            {title}
          </div>
          <div>
            <Link href={`/category/${categorySlug}`}>
              <button className="bg-[#2874f0] text-white shadow-[0_2px_4px_0_rgba(0,0,0,.2)] text-[13px] font-medium leading-4 px-5 py-3 uppercase rounded-sm">
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block px-5 py-4">
        {isLoading ? (
          "Content is loading"
        ) : (
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data!.products.map(
              (product: {
                id: number;
                title: string;
                thumbnail: string;
                price: number;
              }) => (
                <SwiperSlide key={product.id}>
                  <CategoryProductCarouselCard
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        )}
      </div>
      <div className="block md:hidden px-3 py-2 flex flex-wrap">
        {isLoading
          ? "Content is loading"
          : data!.products
              .slice(0, 4)
              .map(
                (product: {
                  id: number;
                  title: string;
                  thumbnail: string;
                  price: number;
                }) => (
                  <CategoryProductCarouselCard
                    key={product.id}
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                  />
                )
              )}
      </div>
    </div>
  );
};

export default CategoryProductCarousel;
