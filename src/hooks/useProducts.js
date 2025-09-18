
import { useEffect, useState } from "react";
import axios from "axios";

export function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products?limit=100`;

    console.log("Fetching URL:", url);

    axios
      .get(url)
      .then((res) => {
        console.log("API response:", res.data);
        setProducts(res.data.products || []);
        setError(null);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Failed to fetch products");
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { products, loading, error };
}



