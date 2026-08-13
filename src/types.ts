export type CartItem = {
  id: string
  productId: string
  name: string
  price: number
  mrp: number
  quantity: number
  image: string
  stock: number
}

export type WishlistItem = {
  id: string
  productId: string
  name: string
  price: number
  mrp: number
  image: string
  stock: number
}

export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'PACKED'
  | 'DISPATCHED'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'PAYMENT_FAILED'
  | 'CANCELLED'
  | 'REFUND_PENDING'
  | 'REFUNDED'
  | 'RETURN_REQUESTED'
  | 'RETURN_APPROVED'
  | 'RETURNED'
  | 'RTO'
