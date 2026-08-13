import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heart, Minus, Plus, ShieldCheck, Star, Truck, CheckCircle2, ChevronRight } from 'lucide-react'
import { products } from '../data'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

export function ProductDetailPage() {
  const { slug } = useParams()
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const [quantity, setQuantity] = useState(2)

  const product = useMemo(() => products.find((item) => item.slug === slug) ?? products[0], [slug])
  const related = products.filter((item) => item.id !== product.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-[#6b6560]">
        <Link to="/" className="transition-colors hover:text-[#9a6a32]">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/shop" className="transition-colors hover:text-[#9a6a32]">Shop</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[#292621]">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[32px] border border-[#e7d7b8] bg-white/80 p-5 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
            <div className="flex h-[500px] items-center justify-center rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.7),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)]">
              <div className="relative h-[320px] w-[220px] rotate-[-10deg] rounded-[18px] border border-[#d6c6a0] bg-[linear-gradient(120deg,#111827_0%,#2b2a2a_18%,#f3efe5_18%,#f3efe5_100%)] p-4 shadow-[0_30px_50px_rgba(41,38,33,0.18)]">
                <div className="absolute inset-0 rounded-[18px] border border-[#d6c6a0]" />
                <div className="flex h-full w-full flex-col justify-between rounded-[12px] bg-[linear-gradient(180deg,#f8f3eb_0%,#efe6d8_100%)] p-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a6a32]">Anjali</p>
                    <h3 className="mt-4 font-serif text-5xl leading-none text-[#292621]">{product.subject}</h3>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6b6560]">{product.classLevel}</p>
                    <p className="mt-2 text-base font-semibold text-[#292621]">{product.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-24 rounded-[20px] border border-[#e7d7b8] bg-white/70 shadow-sm" />
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-[#e7d7b8] bg-white/80 p-6 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex rounded-full bg-[#edf7f1] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2b7a58]">
                {product.badge}
              </span>
              <h1 className="mt-3 font-serif text-5xl leading-none text-[#292621]">{product.name}</h1>
            </div>
            <button onClick={() => toggleWishlist(product.id)} className="rounded-full border border-[#e7d7b8] p-2.5 text-[#292621] transition-colors hover:border-[#d4b896] hover:text-[#9a6a32]">
              <Heart className={`h-5 w-5 ${isWishlisted(product.id) ? 'fill-[#9a6a32] text-[#9a6a32]' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#9a6a32]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-[#d7d0c5]'}`} />
            ))}
            <span className="ml-2 text-sm font-semibold text-[#292621]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-serif text-5xl text-[#292621]">₹{product.price}</span>
            <span className="text-lg text-[#8a8175] line-through">₹{product.mrp}</span>
            <span className="rounded-full bg-[#f7ebda] px-2.5 py-1 text-xs font-bold text-[#9a6a32]">Save ₹{product.mrp - product.price}</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-[#e7d7b8] bg-[#faf8f3] p-3 text-sm text-[#42413e]">
              <Truck className="h-5 w-5 text-[#9a6a32]" />
              <span>Free shipping above ₹799</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#e7d7b8] bg-[#faf8f3] p-3 text-sm text-[#42413e]">
              <ShieldCheck className="h-5 w-5 text-[#2b7a58]" />
              <span>Secure checkout</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-[#e7d7b8] bg-[#f4efe8]">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2 text-[#292621]">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold text-[#292621]">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="p-2 text-[#292621]">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#2b7a58]">
              <CheckCircle2 className="h-4 w-4" />
              In stock: {product.stock} units
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => {
                addToCart(product.id, quantity)
                window.dispatchEvent(new CustomEvent('cart:toast', { detail: `${product.name} added to cart` }))
              }}
              className="rounded-full bg-[#292621] px-5 py-3 font-semibold text-[#f5d8a1] transition-transform hover:scale-[1.01]"
            >
              Add to Cart
            </button>
            <Link to="/checkout" className="rounded-full border border-[#e7d7b8] bg-[#f4efe8] px-5 py-3 text-center font-semibold text-[#292621]">Buy Now</Link>
          </div>

          <div className="grid gap-3 rounded-[24px] bg-[#f8f4ee] p-4 text-sm text-[#42413e]">
            <div className="flex justify-between gap-4"><span>ISBN</span><span className="font-semibold text-[#292621]">{product.isbn}</span></div>
            <div className="flex justify-between gap-4"><span>SKU</span><span className="font-semibold text-[#292621]">{product.sku}</span></div>
            <div className="flex justify-between gap-4"><span>Author</span><span className="font-semibold text-[#292621]">{product.author}</span></div>
            <div className="flex justify-between gap-4"><span>Publisher</span><span className="font-semibold text-[#292621]">{product.publisher}</span></div>
            <div className="flex justify-between gap-4"><span>Language</span><span className="font-semibold text-[#292621]">{product.language}</span></div>
            <div className="flex justify-between gap-4"><span>Pages</span><span className="font-semibold text-[#292621]">{product.pages}</span></div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[32px] border border-[#e7d7b8] bg-white/80 p-6 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
        <h2 className="font-serif text-5xl text-[#292621]">Product overview</h2>
        <p className="mt-4 max-w-3xl text-[#524f4a]">{product.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-[#292621]">Highlights</h3>
            <ul className="mt-3 space-y-2 text-[#524f4a]">
              <li>• Board-aligned explanations and chapter summaries</li>
              <li>• MCQ, short answer and long answer practice</li>
              <li>• Exam-focused quick revision support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#292621]">Specifications</h3>
            <ul className="mt-3 space-y-2 text-[#524f4a]">
              <li>• Class: {product.classLevel}</li>
              <li>• Subject: {product.subject}</li>
              <li>• Edition: {product.edition}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 font-serif text-5xl text-[#292621]">Related books</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} to={`/products/${item.slug}`} className="rounded-[24px] border border-[#e7d7b8] bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(41,38,33,0.08)]">
              <div className="mb-4 h-40 rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.7),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)]" />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-[#6b6560]">{item.category}</div>
                  <div className="mt-1 text-lg font-semibold text-[#292621]">{item.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#292621]">₹{item.price}</div>
                  <div className="text-xs text-[#8a8175] line-through">₹{item.mrp}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
