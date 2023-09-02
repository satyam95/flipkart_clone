import Image from "next/image";
import React from "react";

const BannerCarousel = () => {
  return (
    <div className="my-2 bg-white rounded">
      <div className="p-2 md:px-2">
        <div className="items-center flex flex-col md:flex-row justify-between gap-2">
          <div className="relative w-full h-[210px] md:h-[250px]">
            <Image
              src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/82995c16af191518.jpg"
              alt="image"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="relative w-full h-[210px] md:h-[250px]">
            <Image
              src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/64f91be1237c8713.jpg"
              alt="image"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="relative hidden md:block w-full h-[150px] md:h-[250px]">
            <Image
              src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/3047f668b2ee067c.jpg"
              alt="image"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
