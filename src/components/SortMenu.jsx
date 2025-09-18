
export default function SortMenu({ onSort }) {
  return (
    <div className="flex gap-2 mb-6">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="px-3 py-1 border rounded"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price (Low → High)</option>
        <option value="price-desc">Price (High → Low)</option>
        <option value="title-asc">Title (A → Z)</option>
        <option value="title-desc">Title (Z → A)</option>
      </select>
    </div>
  );
}
