
import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded-md"
      />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </motion.div>
  );
}





