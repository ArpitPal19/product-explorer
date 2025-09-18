
import { X } from "lucide-react";
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6 relative w-full sm:w-1/2">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
