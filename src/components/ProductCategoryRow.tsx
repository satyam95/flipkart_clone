import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

type Props = {};

const ProductCategoryRow = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="p-2">
          <div className="flex items-center justify-between">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                categoryImageUrl={category.thumbnailUrl}
                categoryTitle={category.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryRow;
