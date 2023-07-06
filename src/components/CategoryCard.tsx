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
    <div className="text-center">
      <div className="mb-2">
        <Image
          src={categoryImageUrl}
          alt={categoryTitle}
          height={64}
          width={64}
          className="mx-auto"
        />
      </div>
      <div className="font-medium text-sm">{categoryTitle}</div>
    </div>
  );
};

export default CategoryCard;
