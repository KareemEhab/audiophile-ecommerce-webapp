import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: ProductGallery;
  others: ProductOther[];
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
}

export interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductOther {
  slug: string;
  name: string;
  image: ProductImage;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get("/products", {
        signal: controller.signal,
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const getProduct = async (category: string, slug: string) => {
    setLoading(true);
    const response = await apiClient.get(`/products/${category}/${slug}`);
    setLoading(false);
    return response.data;
  };

  return { products, error, isLoading, getProduct };
};

export default useProducts;
