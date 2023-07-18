import Image from "next/image";
import React, { useState } from "react";

interface ImagesType {
  images: string[];
}

const ProductGallery = ({ images }: ImagesType) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`image-${index}`}
            height={200}
            width={200}
            onClick={() => setMainImage(image)}
          />
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
