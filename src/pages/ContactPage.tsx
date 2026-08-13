import { useState } from 'react'
import { products } from '../data'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    booksWanted: '',
    message: '',
  })
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const whatsappText = [
        'Hello Anjali Science Publication,',
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Books wanted: ${formData.booksWanted || 'Not specified'}`,
        `Message: ${formData.message}`,
      ].join('\n')

      const whatsappUrl = `https://wa.me/917984330996?text=${encodeURIComponent(whatsappText)}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      setStatus({
        type: 'success',
        message: 'Your WhatsApp message has been prepared for +91 7984330996. Please send it from the WhatsApp window.',
      })
      setFormData({ name: '', email: '', booksWanted: '', message: '' })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      setStatus({ type: 'error', message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
      <div className="mb-12 space-y-3">
        <h1 className="font-serif text-5xl font-bold text-[#292621]">Get in touch</h1>
        <p className="text-lg text-[#6b6560]">Have questions about our books? We're here to help.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[32px] bg-[#292621] p-8 text-white shadow-[0_24px_60px_rgba(41,38,33,0.1)] flex flex-col">
          <img src="/asp-logo.jpeg" alt="Anjali Science Publication" className="w-full h-auto rounded-[24px] mb-8 object-cover" />
          <h2 className="font-serif text-2xl font-bold text-[#f5d8a1]">Contact info</h2>
          <div className="mt-8 space-y-6 text-[#e7d7b8]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9a6a32]">Email</p>
              <p className="mt-2 text-base">anjalisciencepublication@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9a6a32]">Phone</p>
              <p className="mt-2 text-base">+91 7984330996</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9a6a32]">Support hours</p>
              <p className="mt-2 text-base">9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-8 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Books wanted</label>
            <select
              name="booksWanted"
              value={formData.booksWanted}
              onChange={handleChange}
              className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
            >
              <option value="">Select a book</option>
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Message</label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us more..."
              className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
            />
          </div>

          {status.message && (
            <div
              className={`mt-5 rounded-[20px] border px-4 py-4 text-sm ${
                status.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full rounded-full bg-[#292621] px-5 py-3.5 font-semibold text-[#f5d8a1] transition hover:shadow-lg hover:shadow-[#292621]/10 disabled:opacity-50"
          >
            {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  )
}
