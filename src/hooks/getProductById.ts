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
  images: string[];
}

export const getProductById = (productId: number) => {
    return useQuery({
        queryKey: [productId],
        queryFn: async () => {
            const {data} = await axios.get(
                `https://dummyjson.com/products/${productId}`
            );
            return data as ProductType
        }
    })
};
