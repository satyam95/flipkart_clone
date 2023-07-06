"use client";

import { products } from "@/data/products";
import Image from "next/image";

import React from "react";

function Product({ params }: { params: { id: number } }) {
  const productId = params.id;
  const productDetail = products.find(
    (product) => product.id === Number(productId)
  );

  return (
    <main>
      <div className="m-1.5 bg-white rounded">
        <div className="container mx-auto">
          <div className="flex items-center flex-col md:flex-row md:gap-8">
            <div className="relative w-full md:w-2/5 h-[300px] md:h-[500px]">
              <Image
                src={productDetail!.thumbnail}
                alt={productDetail!.title}
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="w-full p-4 md:w-3/5">
              <div className="font-medium text-base text-[#878787]">
              {productDetail!.brand}
              </div>
              <h1 className="text-lg text-[#212121] font-normal">
              {productDetail!.title}
              </h1>
              <div className="text-[#26a541] font-medium text-base">
                Special price
              </div>
              <div className="text-3xl text-[#212121] font-normal">₹{productDetail!.price}</div>
              <div className="mt-8">
                <button className="bg-[#ff9f00] px-10 py-4 rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,.2)]">
                  <div className="flex items-center">
                    <div className="pr-2">
                      <svg
                        className="V3C5bO"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="_1bS9ic"
                          d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-medium text-base leading-5 text-white uppercase">
                      Add to cart
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
