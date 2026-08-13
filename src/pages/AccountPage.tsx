import { Link } from 'react-router-dom'

const accountLinks = [
  { label: 'Orders', to: '/orders' },
  { label: 'Addresses', to: '/addresses' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Password', to: '/password' },
]

export function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="mb-6 font-serif text-5xl text-[#292621]">My account</h1>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-6 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5e7ca] text-2xl font-black text-[#9a6a32]">AS</div>
          <h2 className="text-xl font-semibold text-[#292621]">Anjali Sharma</h2>
          <p className="mt-1 text-[#6b6560]">anjali@example.com</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {accountLinks.map((link) => (
            <Link key={link.label} to={link.to} className="rounded-[24px] border border-[#e7d7b8] bg-white/80 p-5 text-lg font-semibold text-[#292621] shadow-sm transition-all hover:border-[#d4b896] hover:text-[#9a6a32]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
