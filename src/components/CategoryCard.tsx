import Image from "next/image";
import React from "react";

type CategoryCardPropsType = {
  categoryImageUrl: string;
  categoryTitle: string;
};

const CategoryCard = ({
  categoryImageUrl,
  categoryTitle,
}: CategoryCardPropsType) => {
  return (
    <div className="text-center min-w-[70px]">
      <div className="mb-1 md:mb-2">
        <Image
          src={categoryImageUrl}
          alt={categoryTitle}
          height={64}
          width={64}
          className="mx-auto"
        />
      </div>
      <div className="font-medium text-xs md:text-sm">{categoryTitle}</div>
    </div>
  );
};

export default CategoryCard;
