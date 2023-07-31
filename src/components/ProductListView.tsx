import React from "react";
import ProductHorizontalCard from "./ProductHorizontalCard";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: any[];
}

interface ProductsType {
  products: ProductType[];
}

const ProductListView = ({ products }: ProductsType) => {
  return (
    <>
      {products?.map((product) => (
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
    </>
  );
};

export default ProductListView;
