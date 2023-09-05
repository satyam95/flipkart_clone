"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import ProductHorizontalCard from "@/components/ProductHorizontalCard";
import { getProductsBySearch } from "@/hooks/getProductsBySearch";
import { useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const { data, isLoading } = getProductsBySearch(searchQuery!);

  if (isLoading) return <LoadingSpinner />;

  return (
    <main>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="m-3">
          <div className="max-w-[1024px] mx-auto bg-white shadow-[0_2px_4px_0_rgba(0,0,0,.08)] rounded-sm mb-2 px-4 py-2">
            <div className="text-lg px-4 py-2">
              Showing results for: {searchQuery}
            </div>
            <div className="text-lg px-4 py-2">
              {data?.products.map((product) => (
                <ProductHorizontalCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  rating={product.rating}
                  description={product.description}
                  category={product.category}
                  thumbnail={product.thumbnail}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
