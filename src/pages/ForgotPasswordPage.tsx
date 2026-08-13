import { Link } from 'react-router-dom'

export function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 lg:px-6">
      <div className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-8 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
        <h1 className="font-serif text-4xl font-bold text-[#292621]">Reset password</h1>
        <p className="mt-2 text-sm text-[#6b6560]">Enter your email and we'll send you a reset link.</p>
        <div className="mt-8">
          <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Email address</label>
          <input type="email" placeholder="you@example.com" className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]" />
        </div>
        <button className="mt-8 w-full rounded-full bg-[#292621] px-5 py-3.5 font-semibold text-[#f5d8a1] transition hover:shadow-lg hover:shadow-[#292621]/10">Send reset link</button>
        <div className="mt-4 text-center text-sm">
          <Link to="/login" className="font-medium text-[#9a6a32] transition hover:text-[#b88a44]">Back to login</Link>
        </div>
      </div>
    </div>
  )
}
