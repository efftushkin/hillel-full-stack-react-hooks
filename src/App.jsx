import { useCallback, useMemo, useState } from 'react'
import './App.css'
import {
  filterProducts,
  getCatalogStats,
  sortProducts,
} from './data/catalogData'
import { CatalogPanel } from './components/CatalogPanel'
import { CatalogToolbar } from './components/CatalogToolbar'
import { MemoProductList, ProductList } from './components/ProductList'
import { useCatalogData } from './hooks/useCatalogData'

function BaselineCatalogPanel({
  products,
  filters,
  favoriteIds,
  onToggleFavorite,
  renderCount,
  listComputationCount,
  statsComputationCount,
}) {
  const visibleProducts = sortProducts(
    filterProducts(products, filters),
    filters.sortBy,
  )
  const stats = getCatalogStats(products, favoriteIds)

  return (
    <CatalogPanel
      title="Baseline catalog"
      badge="Before memoization"
      variant="baseline"
      renderCount={renderCount}
      listComputationCount={listComputationCount}
      statsComputationCount={statsComputationCount}
      visibleCount={visibleProducts.length}
      stats={stats}
      listComponent={ProductList}
      products={visibleProducts}
      favoriteIds={favoriteIds}
      onToggleFavorite={onToggleFavorite}
      memoizedCards={false}
    />
  )
}

function OptimizedCatalogPanel({
  products,
  filters,
  favoriteIds,
  onToggleFavorite,
  renderCount,
  listComputationCount,
  statsComputationCount,
}) {
  const visibleProducts = useMemo(() => {
    return sortProducts(filterProducts(products, filters), filters.sortBy)
  }, [filters, products])

  const stats = useMemo(() => {
    return getCatalogStats(products, favoriteIds)
  }, [favoriteIds, products])

  return (
    <CatalogPanel
      title="Optimized catalog"
      badge="After memoization"
      variant="optimized"
      renderCount={renderCount}
      listComputationCount={listComputationCount}
      statsComputationCount={statsComputationCount}
      visibleCount={visibleProducts.length}
      stats={stats}
      listComponent={MemoProductList}
      products={visibleProducts}
      favoriteIds={favoriteIds}
      onToggleFavorite={onToggleFavorite}
      memoizedCards={true}
    />
  )
}

function App() {
  const { products, categoryOptions, sortOptions } = useCatalogData()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [onlyInStock, setOnlyInStock] = useState(false)
  const [counter, setCounter] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [interactionCount, setInteractionCount] = useState(0)
  const [optimizedListCalculationCount, setOptimizedListCalculationCount] =
    useState(1)
  const [optimizedStatsCalculationCount, setOptimizedStatsCalculationCount] =
    useState(1)

  const favoriteIds = useMemo(() => new Set(favorites), [favorites])

  const filters = useMemo(
    () => ({
      search,
      category,
      sortBy,
      onlyInStock,
    }),
    [category, onlyInStock, search, sortBy],
  )

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value)
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedListCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const handleCategoryChange = useCallback((event) => {
    setCategory(event.target.value)
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedListCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const handleSortChange = useCallback((event) => {
    setSortBy(event.target.value)
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedListCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const handleOnlyInStockChange = useCallback((event) => {
    setOnlyInStock(event.target.checked)
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedListCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const handleResetFilters = useCallback(() => {
    setSearch('')
    setCategory('all')
    setSortBy('featured')
    setOnlyInStock(false)
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedListCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const handleIncrementCounter = useCallback(() => {
    setCounter((currentCounter) => currentCounter + 1)
    setInteractionCount((currentCount) => currentCount + 1)
  }, [])

  const handleToggleFavorite = useCallback((productId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(productId)) {
        return currentFavorites.filter((favoriteId) => favoriteId !== productId)
      }

      return [...currentFavorites, productId]
    })
    setInteractionCount((currentCount) => currentCount + 1)
    setOptimizedStatsCalculationCount((currentCount) => currentCount + 1)
  }, [])

  const renderCount = interactionCount + 1

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">React memoization demo</p>
          <h1>Memoization Lab</h1>
        </div>

        <div className="app-header__summary">
          <span>{products.length} products</span>
          <span>{categoryOptions.length - 1} categories</span>
          <span>{favorites.length} favorites</span>
        </div>
      </header>

      <CatalogToolbar
        search={search}
        category={category}
        sortBy={sortBy}
        onlyInStock={onlyInStock}
        counter={counter}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
        onOnlyInStockChange={handleOnlyInStockChange}
        onResetFilters={handleResetFilters}
        onIncrementCounter={handleIncrementCounter}
        categoryOptions={categoryOptions}
        sortOptions={sortOptions}
      />

      <section className="catalog-grid" aria-label="Memoization comparison">
        <BaselineCatalogPanel
          products={products}
          filters={filters}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          renderCount={renderCount}
          listComputationCount={renderCount}
          statsComputationCount={renderCount}
        />

        <OptimizedCatalogPanel
          products={products}
          filters={filters}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          renderCount={renderCount}
          listComputationCount={optimizedListCalculationCount}
          statsComputationCount={optimizedStatsCalculationCount}
        />
      </section>
    </main>
  )
}

export default App
