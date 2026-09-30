function Header({ categories, category, onCategoryChange, inStockOnly, onStockChange }) {
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Product Dashboard</h1>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            Category
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="rounded-md bg-white px-3 py-1.5 text-ink focus:outline-2 focus:outline-amber"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onStockChange(e.target.checked)}
              className="size-4 accent-amber"
            />
            In stock only
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
