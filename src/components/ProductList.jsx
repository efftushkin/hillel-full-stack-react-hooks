import { memo } from 'react'
import { MemoProductCard, ProductCard } from './ProductCard'

function ProductList({
  products,
  favoriteIds,
  onToggleFavorite,
  memoizedCards = false,
}) {
  const CardComponent = memoizedCards ? MemoProductCard : ProductCard

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>Change the filters to show more catalog items.</p>
      </div>
    )
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <CardComponent
          key={product.id}
          product={product}
          isFavorite={favoriteIds.has(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export const MemoProductList = memo(ProductList)
export { ProductList }
