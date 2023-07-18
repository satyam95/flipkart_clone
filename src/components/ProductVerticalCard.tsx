import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardPropsType = {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
};

const ProductVerticalCard = ({
  id,
  title,
  price,
  brand,
  category,
  thumbnail,
}: ProductCardPropsType) => {
  return (
    <>
      <Link href={`/product/${id}`}>
        <div className="p-2">
          <div className="relative w-full h-[150px] md:h-[180px]">
            <Image
              src={thumbnail}
              alt={title}
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="pt-1">
            <div className="text-[#878787] text-sm v">{brand}</div>
            <div className="text-sm">{title}</div>
            <div className="text-[#878787] text-sm font-medium">{category}</div>
            <div className="text-[#212121] font-medium text-base">₹{price}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductVerticalCard;
