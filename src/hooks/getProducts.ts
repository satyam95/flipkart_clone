import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const getProducts = (categorySlug: string) => {
  return useQuery({
    queryKey: [categorySlug],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${categorySlug}`
      );
      return data as ProductsType;
    },
  });
};
