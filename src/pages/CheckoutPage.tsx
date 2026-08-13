import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useCart } from '../hooks/useCart'

export function CheckoutPage() {
  const { cart, subtotal } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const shipping = subtotal > 799 ? 0 : 49
  const total = subtotal + shipping

  const formFields = useMemo(
    () => [
      { label: 'Full name', type: 'text', placeholder: 'Raj Sharma' },
      { label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
      { label: 'Email', type: 'email', placeholder: 'student@example.com' },
      { label: 'Address', type: 'text', placeholder: '123 Education Lane' },
      { label: 'Area', type: 'text', placeholder: 'Janakpuri' },
      { label: 'City', type: 'text', placeholder: 'New Delhi' },
      { label: 'State', type: 'text', placeholder: 'Delhi' },
      { label: 'Pincode', type: 'text', placeholder: '110058' },
    ],
    [],
  )

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center lg:px-6">
        <div className="rounded-[32px] border border-[#d7f2e2] bg-[#edf9f2] p-10 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#2b7a58]" />
          <h1 className="mt-4 font-serif text-5xl text-[#292621]">Order placed successfully</h1>
          <p className="mt-3 text-[#524f4a]">Your order has been created and payment will be verified securely.</p>
          <Link to="/orders" className="mt-6 inline-block rounded-full bg-[#2b7a58] px-5 py-3 font-semibold text-white">View orders</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="mb-6 font-serif text-5xl text-[#292621]">Checkout</h1>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-5 rounded-[32px] border border-[#e7d7b8] bg-white/80 p-6 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          {formFields.map((field) => (
            <div key={field.label}>
              <label className="mb-2 block text-sm font-medium text-[#524f4a]">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 outline-none transition focus:border-[#9a6a32]"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="w-full rounded-full bg-[#292621] px-5 py-3 font-semibold text-[#f5d8a1]"
          >
            Place order securely
          </button>
        </form>

        <aside className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-5 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          <h2 className="font-serif text-4xl text-[#292621]">Order summary</h2>
          <div className="mt-4 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl bg-[#f8f4ee] p-3 text-sm">
                <div>
                  <div className="font-medium text-[#292621]">{item.name}</div>
                  <div className="text-[#6b6560]">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold text-[#292621]">₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3 text-sm text-[#524f4a]">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>₹{shipping}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>₹0</span></div>
            <div className="my-4 h-px bg-[#e7d7b8]" />
            <div className="flex justify-between text-base font-bold text-[#292621]"><span>Total</span><span>₹{total}</span></div>
          </div>
        </aside>
      </div>
    </div>
  )
}
