export function CatalogToolbar({
  search,
  category,
  sortBy,
  onlyInStock,
  counter,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onOnlyInStockChange,
  onResetFilters,
  onIncrementCounter,
  categoryOptions,
  sortOptions,
}) {
  return (
    <section className="toolbar">
      <div className="toolbar__header">
        <div>
          <p className="eyebrow">Controls</p>
          <h2>Catalog filters</h2>
        </div>

        <button type="button" className="primary-button" onClick={onIncrementCounter}>
          Unrelated counter: {counter}
        </button>
      </div>

      <div className="toolbar__grid">
        <label className="field">
          <span>Search products</span>
          <input
            type="search"
            value={search}
            onChange={onSearchChange}
            placeholder="Search by title, description, or category"
          />
        </label>

        <label className="field">
          <span>Category</span>
          <select value={category} onChange={onCategoryChange}>
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sort by</span>
          <select value={sortBy} onChange={onSortChange}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="toggle">
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={onOnlyInStockChange}
          />
          <span>In stock only</span>
        </label>
      </div>

      <button type="button" className="secondary-button" onClick={onResetFilters}>
        Reset filters
      </button>
    </section>
  )
}
