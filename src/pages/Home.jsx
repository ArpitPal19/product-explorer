
import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Filters from "../components/Filters";
import SortMenu from "../components/SortMenu";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState(null);
  const [sortType, setSortType] = useState("");
  const [search, setSearch] = useState("");

  const { products, loading, error } = useProducts(category);
  const itemsPerPage = 12;

  const processedProducts = useMemo(() => {
    let sorted = [...products];

    switch (sortType) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    if (search.trim() !== "") {
      sorted = sorted.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return sorted;
  }, [products, sortType, search]);

  const paginatedProducts = useMemo(() => {
    const start = page * itemsPerPage;
    return processedProducts.slice(start, start + itemsPerPage);
  }, [processedProducts, page]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Explorer</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters
        onSelect={(c) => {
          setCategory(c);
          setPage(0);
        }}
      />

      <SortMenu onSort={(t) => setSortType(t)} />

      {error && <p className="text-red-500">{error}</p>}

      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <Loader />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          ) : (
            paginatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelectedId(p.id)}
              />
            ))
          )}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          disabled={(page + 1) * itemsPerPage >= processedProducts.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ProductDetail
            key={selectedId}
            productId={selectedId}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
