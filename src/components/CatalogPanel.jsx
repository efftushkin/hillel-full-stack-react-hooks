export function CatalogPanel({
  title,
  badge,
  variant,
  renderCount,
  listComputationCount,
  statsComputationCount,
  visibleCount,
  stats,
  listComponent: ListComponent,
  products,
  favoriteIds,
  onToggleFavorite,
  memoizedCards,
}) {
  return (
    <section className={`catalog-panel catalog-panel--${variant}`}>
      <header className="catalog-panel__header">
        <div>
          <p className="eyebrow">{badge}</p>
          <h2>{title}</h2>
        </div>

        <div className="metric-strip">
          <span>Renders: {renderCount}</span>
          <span>List calculations: {listComputationCount}</span>
          <span>Stats calculations: {statsComputationCount}</span>
        </div>
      </header>

      <div className="stats-grid">
        <article>
          <span>Visible</span>
          <strong>{visibleCount}</strong>
        </article>
        <article>
          <span>Total</span>
          <strong>{stats.total}</strong>
        </article>
        <article>
          <span>In stock</span>
          <strong>{stats.inStock}</strong>
        </article>
        <article>
          <span>Favorites</span>
          <strong>{stats.favoriteCount}</strong>
        </article>
        <article>
          <span>Average price</span>
          <strong>${stats.averagePrice.toFixed(2)}</strong>
        </article>
      </div>

      <ListComponent
        products={products}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
        memoizedCards={memoizedCards}
      />
    </section>
  )
}
