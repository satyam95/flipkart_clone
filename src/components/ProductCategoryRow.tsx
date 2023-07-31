import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";


const ProductCategoryRow = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="p-2">
          <div className="flex items-center justify-between overflow-x-scroll scrollbar-h">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                slug={category.slug}
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
