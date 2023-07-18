import Image from "next/image";
import React from "react";

const CategoryProductCarouselCard = () => {
  return (
    <div className="py-6 px-4 w-[160px]">
      <div className="relative w-full h-[150px] md:h-[150px]">
        <Image
          src="https://rukminim2.flixcart.com/image/150/150/xif0q/computer/s/g/x/titan-gt77-hx-13vi-092in-gaming-laptop-msi-original-imagz6bbegpvmr2k.jpeg"
          alt="image"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="mt-4 text-center">
        <div className="font-medium text-sm text-[#212121]">MSI Laptops</div>
        <div className="py-2 text-sm text-[#388e3c]">From ₹34,990</div>
        <div className="text-sm text-[#212121]">0% EMI 12 M*</div>
      </div>
    </div>
  );
};

export default CategoryProductCarouselCard;
