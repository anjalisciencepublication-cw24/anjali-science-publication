import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#e7d7b8] bg-[#1d1d1b] text-[#f5f0e8]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src="/aspword.png" alt="Anjali Science Publication" className="h-10 w-auto" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#d2c7b7]">
              Premium educational books and science resources designed for academic confidence, deeper understanding and strong exam outcomes.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5d8a1]">Anjali</h3>
            <ul className="space-y-3 text-sm text-[#d2c7b7]">
              <li><Link to="/shop" className="transition-colors hover:text-[#f5d8a1]">Books</Link></li>
              <li><Link to="/shop" className="transition-colors hover:text-[#f5d8a1]">Categories</Link></li>
              <li><Link to="/shop?sort=popular" className="transition-colors hover:text-[#f5d8a1]">Bestsellers</Link></li>
              <li><Link to="/shop?sort=newest" className="transition-colors hover:text-[#f5d8a1]">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5d8a1]">Customer</h3>
            <ul className="space-y-3 text-sm text-[#d2c7b7]">
              <li><Link to="/account" className="transition-colors hover:text-[#f5d8a1]">My Account</Link></li>
              <li><Link to="/orders" className="transition-colors hover:text-[#f5d8a1]">Orders</Link></li>
              <li><Link to="/wishlist" className="transition-colors hover:text-[#f5d8a1]">Wishlist</Link></li>
              <li><Link to="/cart" className="transition-colors hover:text-[#f5d8a1]">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5d8a1]">Support</h3>
            <ul className="space-y-3 text-sm text-[#d2c7b7]">
              <li><Link to="/contact" className="transition-colors hover:text-[#f5d8a1]">Contact</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-[#f5d8a1]">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="transition-colors hover:text-[#f5d8a1]">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="transition-colors hover:text-[#f5d8a1]">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5d8a1]">Connect</h3>
            <ul className="space-y-4 text-sm text-[#d2c7b7]">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-[#f5d8a1]" />
                <a href="mailto:anjalisciencepublication@gmail.com" className="break-all transition-colors hover:text-[#f5d8a1]">
                  anjalisciencepublication@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#f5d8a1]" />
                <a href="tel:+917984330996" className="transition-colors hover:text-[#f5d8a1]">+91 7984330996</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#f5d8a1]" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-6 rounded-[28px] border border-[#3a362f] bg-[#23211f] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f5d8a1]">Newsletter</p>
            <h3 className="mt-2 font-serif text-3xl text-[#faf8f3]">Academic updates, straight to your inbox.</h3>
          </div>
          <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-[#4a413d] bg-[#2d2926] px-3 py-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-0 bg-transparent px-2 text-sm text-[#faf8f3] outline-none placeholder:text-[#b9ae9f]"
            />
            <button className="inline-flex items-center gap-2 rounded-full bg-[#f5d8a1] px-4 py-2 text-sm font-semibold text-[#1d1d1b] transition-transform hover:scale-[1.02]">
              Join <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-[#3a362f] pt-8 text-xs text-[#cfc0ae] md:flex-row md:items-center">
          <div>© 2026 Anjali Science Publication. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#f5d8a1]">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-[#f5d8a1]">Terms & Conditions</Link>
            <Link to="/shipping-policy" className="transition-colors hover:text-[#f5d8a1]">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
