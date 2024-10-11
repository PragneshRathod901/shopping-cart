import axios from "axios";
import { Product } from "@/app/lib/definition";
const Product_API_Url = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const data: { data: Product[] } = await axios.get(
    `${Product_API_Url}/products`
  );
  return data;
};
