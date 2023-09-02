import Image from "next/image";
import React, { useState } from "react";

interface ImagesType {
  images: string[];
}

const ProductGallery = ({ images }: ImagesType) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6">
      <div className="flex flex-row md:flex-col gap-3 md:gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[80px] h-[80px] md:h-[150px] md:w-[150px]"
          >
            <Image
              src={image}
              alt={`image-${index}`}
              fill={true}
              className="object-contain"
              onClick={() => setMainImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={mainImage}
          alt="main image"
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
