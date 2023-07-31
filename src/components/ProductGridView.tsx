import React from "react";
import ProductVerticalCard from "./ProductVerticalCard";

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

const ProductGridView = ({ products }: ProductsType) => {
  return (
    <div className="flex flex-wrap">
      {products?.map((product) => (
        <div key={product.id} className="w-1/2 md:w-3/12">
          <ProductVerticalCard
            id={product.id}
            title={product.title}
            price={product.price}
            brand={product.brand}
            category={product.category}
            thumbnail={product.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGridView;
