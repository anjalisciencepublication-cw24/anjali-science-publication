import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function MainLayout() {
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return

    const timer = window.setTimeout(() => setToast(null), 3000)
    return () => window.clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    const handleCartToast = (event: Event) => {
      const customEvent = event as CustomEvent<string>
      setToast(customEvent.detail)
    }

    window.addEventListener('cart:toast', handleCartToast)
    return () => window.removeEventListener('cart:toast', handleCartToast)
  }, [])

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#292621]">
      <Header />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />

      {toast && (
        <div className="pointer-events-none fixed right-4 top-4 z-[60] rounded-full bg-[#292621] px-4 py-3 text-sm font-semibold text-[#f5d8a1] shadow-2xl shadow-[#292621]/20 md:right-6 md:top-6">
          {toast}
        </div>
      )}
    </div>
  )
}
