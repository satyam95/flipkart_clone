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

export const GetProductsBySearch = (searchTerm: string) => {
  return useQuery({
    queryKey: [searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      return data as ProductsType;
    },
  });
};
