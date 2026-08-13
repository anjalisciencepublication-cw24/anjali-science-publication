'use client'
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/shop' },
  { label: 'Categories', to: '/shop' },
  { label: 'New Arrivals', to: '/shop?sort=newest' },
  { label: 'Bestsellers', to: '/shop?sort=popular' },
  { label: 'About', to: '/shop' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const { itemCount: _itemCount } = useCart()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const trimmed = searchQuery.trim()
    if (trimmed) {
      navigate(`/shop?search=${encodeURIComponent(trimmed)}`)
    } else {
      navigate('/shop')
    }
    closeMobileMenu()
    setSearchQuery('')
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e7d7b8]/90 bg-[#faf8f3]/90 shadow-[0_10px_30px_rgba(41,38,33,0.04)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3.5 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#292621] transition-colors hover:bg-[#f3eee4] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-90">
              <img src="/aspwordmark.png" alt="Anjali Science Publication" className="h-10 w-auto lg:h-11" />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group relative text-sm font-medium text-[#292621] transition-colors hover:text-[#9a6a32]"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#9a6a32] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3 lg:gap-4">
              <form
                onSubmit={handleSearchSubmit}
                className="hidden items-center gap-2 rounded-xl border border-[#e7d7b8] bg-[#f4efe8] px-3 py-2 text-sm text-[#292621] transition-all hover:border-[#d4b896] focus-within:border-[#9a6a32] focus-within:ring-1 focus-within:ring-[#e7d7b8] md:flex"
              >
                <Search className="h-4 w-4 text-[#9a6a32]" />
                <input
                  aria-label="Search books"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-40 border-0 bg-transparent text-[#292621] outline-none placeholder:text-[#8a8175]"
                />
              </form>

              <Link
                to="/account"
                className="hidden items-center justify-center rounded-xl border border-[#e7d7b8] bg-[#fffdfb] p-2.5 text-[#292621] transition-all hover:border-[#d4b896] hover:text-[#9a6a32] md:flex"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center justify-center rounded-xl border border-[#e7d7b8] bg-[#fffdfb] p-2.5 text-[#292621] transition-all hover:border-[#d4b896] hover:text-[#9a6a32]"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </Link>

              <Link
                to="/cart"
                className="flex items-center justify-center rounded-xl border border-[#e7d7b8] bg-[#fffdfb] p-2.5 text-[#292621] transition-all hover:border-[#9a6a32] hover:text-[#9a6a32]"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#292621]/20 backdrop-blur-sm lg:hidden" onClick={closeMobileMenu}>
          <div
            className="absolute inset-x-0 top-0 max-h-[80vh] overflow-y-auto border-b border-[#e7d7b8] bg-[#faf8f3] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col divide-y divide-[#e7d7b8]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="px-4 py-3.5 text-base font-medium text-[#292621] transition-colors hover:bg-[#f4efe8] hover:text-[#9a6a32]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-[#e7d7b8] p-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex w-full items-center gap-2 rounded-xl border border-[#e7d7b8] bg-[#f4efe8] px-3 py-2.5 text-sm"
              >
                <Search className="h-4 w-4 text-[#9a6a32]" />
                <input
                  aria-label="Search books"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full border-0 bg-transparent text-[#292621] outline-none placeholder:text-[#8a8175]"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

