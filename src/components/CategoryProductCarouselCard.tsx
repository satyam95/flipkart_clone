import Image from "next/image";
import React from "react";

interface ProductTypes {
  title: string;
  thumbnail: string;
  price: number;
}

const CategoryProductCarouselCard = ({
  title,
  thumbnail,
  price,
}: ProductTypes) => {
  return (
    <div className="py-6 px-4 w-full">
      <div className="relative w-full h-[150px] md:h-[150px]">
        <Image
          src={thumbnail}
          alt={title}
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="mt-4 text-center">
        <div className="font-medium text-sm text-[#212121]">{title}</div>
        <div className="py-2 text-sm text-[#388e3c]">From ₹{price}</div>
        <div className="text-sm text-[#212121]">0% EMI 12 M*</div>
      </div>
    </div>
  );
};

export default CategoryProductCarouselCard;
