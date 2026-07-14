import { memo } from 'react'

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <article className={`product-card ${isFavorite ? 'product-card--favorite' : ''}`}>
      <div className="product-card__top">
        <div>
          <p className="product-card__category">{product.category}</p>
          <h3>{product.title}</h3>
        </div>

        <button
          type="button"
          className="favorite-button"
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${product.title} from favorites`
              : `Add ${product.title} to favorites`
          }
          onClick={() => onToggleFavorite(product.id)}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>

      <p className="product-card__description">{product.description}</p>

      <dl className="product-card__meta">
        <div>
          <dt>Price</dt>
          <dd>${product.price.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Rating</dt>
          <dd>{product.rating.toFixed(1)}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{product.inStock ? 'In stock' : 'Out of stock'}</dd>
        </div>
      </dl>

      <span className={`product-label ${product.featured ? 'product-label--featured' : ''}`}>
        {product.label}
      </span>
    </article>
  )
}

export const MemoProductCard = memo(ProductCard)
export { ProductCard }
