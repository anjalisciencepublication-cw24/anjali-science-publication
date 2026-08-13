import { useEffect, useMemo, useState } from 'react'
import type { CartItem } from '../types'
import { products } from '../data'

const CART_KEY = 'asp-cart'

const createCartId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `cart-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return []

    const saved = localStorage.getItem(CART_KEY)
    if (!saved) return []
    try {
      return JSON.parse(saved) as CartItem[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId: string, quantity = 1) => {
    setCart((current) => {
      const product = products.find((item) => item.id === productId)
      if (!product) return current

      const exists = current.find((item) => item.productId === productId)
      if (exists) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item,
        )
      }

      return [
        ...current,
        {
          id: createCartId(),
          productId,
          name: product.name,
          price: product.price,
          mrp: product.mrp,
          quantity: Math.min(quantity, product.stock),
          image: product.image,
          stock: product.stock,
        },
      ]
    })
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) => {
          if (item.productId !== productId) return item
          const nextQuantity = Math.max(0, item.quantity + delta)
          return { ...item, quantity: nextQuantity }
        })
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((item) => item.productId !== productId))
  }

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  )

  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  return { cart, addToCart, updateQuantity, removeFromCart, subtotal, itemCount }
}
