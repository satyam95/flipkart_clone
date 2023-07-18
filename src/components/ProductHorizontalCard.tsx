import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardPropsType = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
};

const ProductHorizontalCard = ({
  id,
  title,
  price,
  rating,
  description,
  thumbnail,
}: ProductCardPropsType) => {
  return (
    <div className="p-6 border border-b">
      <Link href={`/product/${id}`}>
        <div className="flex items-center gap-6">
          <div className="w-full max-w-[250px]">
            <div className="relative w-full h-[150px] md:h-[180px]">
              <Image
                src={thumbnail}
                alt={title}
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
          <div className="grow">
            <div className="flex gap-4">
              <div className="w-8/12">
                <div className="text-[#212121] text-lg font-medium leading-[18px]">
                  {title}
                </div>
                <div className="mt-2 bg-[#388e3c] text-white text-xs font-medium inline-block px-2 py-1 rounded">
                  {rating}
                  <span className="ml-0.5 inline-block">
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                      height={10}
                      width={10}
                      alt="star"
                    />
                  </span>
                </div>
                <div className="text-[#212121] text-sm mt-3">
                  {description}
                </div>
              </div>
              <div className="w-4/12">
                <div className="text-[#212121] text-2xl	font-medium leading-6">
                  ₹{price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductHorizontalCard;
