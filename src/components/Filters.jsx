
import { useEffect, useState } from "react";
import axios from "axios";

export default function Filters({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      console.log("Categories API:", res.data);
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect(null)}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        All
      </button>

      {categories.map((c, i) => {
        if (typeof c === "string") {
          return (
            <button
              key={c}
              onClick={() => onSelect(c)}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-300 transition"
            >
              {c}
            </button>
          );
        }
        return (
          <button
            key={c.slug || i}
            onClick={() => onSelect(c.slug)}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-300 transition"
          >
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
