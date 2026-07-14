import { useMemo } from 'react'
import { categoryOptions, loadCatalogProducts, sortOptions } from '../data/catalogData'

export function useCatalogData() {
  const products = useMemo(() => loadCatalogProducts(), [])

  return {
    products,
    categoryOptions,
    sortOptions,
  }
}

