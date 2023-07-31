import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryCardPropsType = {
  categoryImageUrl: string;
  categoryTitle: string;
  slug: string | null;
};

const CategoryCard = ({
  categoryImageUrl,
  categoryTitle,
  slug,
}: CategoryCardPropsType) => {
  return (
    <div>
      <Link href={`/category/${slug}`}>
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
      </Link>
    </div>
  );
};

export default CategoryCard;
