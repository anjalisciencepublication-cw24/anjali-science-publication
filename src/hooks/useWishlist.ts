import { useEffect, useState } from 'react'
import type { WishlistItem } from '../types'
import { products } from '../data'

const WISHLIST_KEY = 'asp-wishlist'

const createWishlistId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `wishlist-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window === 'undefined') return []

    const saved = localStorage.getItem(WISHLIST_KEY)
    if (!saved) return []
    try {
      return JSON.parse(saved) as WishlistItem[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (productId: string) => {
    const product = products.find((item) => item.id === productId)
    if (!product) return

    setWishlist((current) => {
      const exists = current.some((item) => item.productId === productId)
      if (exists) {
        return current.filter((item) => item.productId !== productId)
      }

      return [
        ...current,
        {
          id: createWishlistId(),
          productId,
          name: product.name,
          price: product.price,
          mrp: product.mrp,
          image: product.image,
          stock: product.stock,
        },
      ]
    })
  }

  const isWishlisted = (productId: string) =>
    wishlist.some((item) => item.productId === productId)

  return { wishlist, toggleWishlist, isWishlisted }
}
