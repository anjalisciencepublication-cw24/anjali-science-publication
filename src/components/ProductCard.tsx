import { Heart, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

type ProductCardProps = {
  id: string
  slug: string
  name: string
  price: number
  mrp: number
  badge: string
  category: string
  rating: number
  reviews: number
}

export function ProductCard({ id, slug, name, price, mrp, badge, category, rating, reviews }: ProductCardProps) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  return (
    <article
      onClick={() => navigate(`/products/${slug}`)}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-[#e7d7b8] bg-white/80 transition-all duration-500 hover:-translate-y-2 hover:border-[#d4b896] hover:shadow-[0_24px_60px_rgba(41,38,33,0.08)]"
    >
      <div className="relative h-64 border-b border-[#eadfc4] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.8),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)] p-4">
        <span className="absolute left-4 top-4 rounded-full bg-[#292621] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d8a1]">
          {badge}
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            toggleWishlist(id)
          }}
          className="absolute right-4 top-4 rounded-full border border-[#e7d7b8] bg-white/80 p-2 text-[#292621] transition-all hover:border-[#d4b896] hover:text-[#9a6a32]"
        >
          <Heart className={`h-4 w-4 ${isWishlisted(id) ? 'fill-[#9a6a32] text-[#9a6a32]' : ''}`} />
        </button>

        <div className="flex h-full items-end justify-center">
          <div className="relative h-40 w-28 rounded-[14px] border border-[#d8c9a8] bg-[linear-gradient(120deg,#101827_0%,#1d2a3b_18%,#f8f4ee_18%,#f8f4ee_100%)] shadow-[0_28px_50px_rgba(17,24,39,0.24)] transition-transform duration-500 group-hover:scale-[1.04] group-hover:-translate-y-1">
            <div className="absolute inset-0 rounded-[14px] border border-[#d8c9a8]/80" />
            <div className="flex h-full w-full flex-col justify-between rounded-[10px] bg-[linear-gradient(180deg,#f8f4ef_0%,#e9dcc2_100%)] p-3">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#9a6a32]">Anjali</p>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a8175]">{category}</p>
                <p className="mt-2 font-serif text-2xl leading-none text-[#292621]">{name.split(' ')[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8175]">
          {category}
        </div>

        <h3 className="font-serif text-[2rem] leading-[0.9] text-[#292621] transition-colors hover:text-[#9a6a32]">
          {name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? 'fill-[#9a6a32] text-[#9a6a32]' : 'text-[#d7d0c5]'}`}
              />
            ))}
          </div>
          <span className="text-xs text-[#6b6560]">
            {rating} <span className="text-[#8a8175]">({reviews})</span>
          </span>
        </div>

        <div className="flex items-baseline gap-2.5">
          <span className="font-serif text-3xl text-[#292621]">₹{price}</span>
          <span className="text-sm text-[#8a8175] line-through">₹{mrp}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a6a32]">
            {Math.round(((mrp - price) / mrp) * 100)}% off
          </span>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              addToCart(id, 2)
              window.dispatchEvent(new CustomEvent('cart:toast', { detail: `${name} added to cart` }))
            }}
            className="flex-1 rounded-full bg-[#292621] px-4 py-2.5 text-sm font-semibold text-[#f5d8a1] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#292621]/10"
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              navigate(`/products/${slug}`)
            }}
            className="rounded-full border border-[#e7d7b8] bg-[#f8f4ee] px-3 py-2.5 text-sm font-semibold text-[#292621] transition-all hover:border-[#d4b896] hover:bg-[#f3eee4]"
          >
            View
          </button>
        </div>
      </div>
    </article>
  )
}
