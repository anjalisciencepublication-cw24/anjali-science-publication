import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import { useWishlist } from '../hooks/useWishlist'
import { useCart } from '../hooks/useCart'

export function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="mb-6 font-serif text-5xl font-bold text-[#292621]">My wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-[#e7d7b8] bg-white/80 p-12 text-center shadow-sm">
          <p className="font-serif text-3xl font-bold text-[#292621]">No items saved yet.</p>
          <p className="mt-3 text-[#6b6560]">Add your favorite books to your wishlist.</p>
          <Link to="/shop" className="mt-6 inline-block rounded-full bg-[#292621] px-6 py-3.5 font-semibold text-[#f5d8a1] transition hover:shadow-lg hover:shadow-[#292621]/10">Browse books</Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((item) => (
            <div key={item.id} className="rounded-[28px] border border-[#e7d7b8] bg-white/80 p-5 shadow-sm transition-all hover:border-[#d4b896] hover:shadow-md">
              <div className="relative h-56 rounded-[24px] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.7),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)]">
                <button onClick={() => toggleWishlist(item.productId)} className="absolute right-3 top-3 rounded-full border border-[#e7d7b8] bg-white p-2.5 text-[#9a6a32] transition hover:bg-[#f8f4ee]">
                  <Heart className="h-5 w-5 fill-current" />
                </button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#292621]">{item.name}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <div className="font-serif text-2xl font-bold text-[#292621]">₹{item.price}</div>
                    <div className="text-sm text-[#8a8175] line-through">₹{item.mrp}</div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button onClick={() => addToCart(item.productId)} className="w-full rounded-full bg-[#292621] px-4 py-3 text-sm font-semibold text-[#f5d8a1] transition hover:shadow-lg hover:shadow-[#292621]/10">
                  <span className="inline-flex items-center gap-2"><ShoppingCart className="h-4 w-4" />Add to cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
