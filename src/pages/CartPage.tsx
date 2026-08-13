import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../hooks/useCart'

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart()
  const shipping = subtotal > 799 ? 0 : 49
  const total = subtotal + shipping

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="mb-6 font-serif text-5xl text-[#292621]">Your cart</h1>

      {cart.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-[#d4b896] bg-white/80 p-12 text-center shadow-sm">
          <p className="font-serif text-4xl text-[#292621]">Your cart is empty.</p>
          <p className="mt-3 text-[#6b6560]">Add educational books and continue shopping.</p>
          <Link to="/shop" className="mt-6 inline-block rounded-full bg-[#292621] px-5 py-3 font-semibold text-[#f5d8a1]">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-[28px] border border-[#e7d7b8] bg-white/80 p-4 shadow-sm sm:flex-row">
                <div className="h-28 w-24 rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.7),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)]" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-[#292621]">{item.name}</h2>
                      <p className="text-sm text-[#6b6560]">₹{item.price} each</p>
                    </div>
                    <button onClick={() => removeFromCart(item.productId)} className="text-[#8a8175] transition-colors hover:text-[#9a6a32]">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-[#e7d7b8] bg-[#f4efe8]">
                      <button onClick={() => updateQuantity(item.productId, -1)} className="p-2 text-[#292621]">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold text-[#292621]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, 1)} className="p-2 text-[#292621]">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#292621]">₹{item.price * item.quantity}</div>
                      <div className="text-xs text-[#8a8175] line-through">₹{item.mrp * item.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-5 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
            <h2 className="font-serif text-4xl text-[#292621]">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm text-[#524f4a]">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₹{shipping}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>₹0</span></div>
              <div className="my-4 h-px bg-[#e7d7b8]" />
              <div className="flex justify-between text-base font-bold text-[#292621]"><span>Total</span><span>₹{total}</span></div>
            </div>
            <Link to="/checkout" className="mt-6 block rounded-full bg-[#292621] px-5 py-3 text-center font-semibold text-[#f5d8a1]">Proceed to checkout</Link>
          </aside>
        </div>
      )}
    </div>
  )
}
