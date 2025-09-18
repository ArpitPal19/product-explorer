
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ProductDetail({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      setLoading(true);
      setProduct(null);
      axios.get(`https://dummyjson.com/products/${productId}`)
        .then((res) => setProduct(res.data))
        .finally(() => setLoading(false));
    }
  }, [productId]);

  if (!productId) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-xl max-w-lg w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 px-2 rounded"
        >
          X
        </button>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-semibold">Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
