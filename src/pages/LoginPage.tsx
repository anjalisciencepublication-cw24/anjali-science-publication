import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/account')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 lg:px-6">
      <div className="rounded-[32px] border border-[#e7d7b8] bg-white/80 p-8 shadow-[0_24px_60px_rgba(41,38,33,0.04)]">
        <h1 className="font-serif text-4xl font-bold text-[#292621]">Welcome back</h1>
        <p className="mt-2 text-sm text-[#6b6560]">Sign in to your Anjali account</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {error && (
            <div className="rounded-[20px] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#524f4a]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full rounded-[20px] border border-[#e7d7b8] bg-[#f8f4ee] px-4 py-3 text-[#292621] outline-none transition focus:border-[#9a6a32]"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link to="/forgot-password" className="font-medium text-[#9a6a32] transition hover:text-[#b88a44]">Forgot password?</Link>
            <Link to="/register" className="font-medium text-[#6b6560] transition hover:text-[#9a6a32]">Create account</Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#292621] px-5 py-3.5 font-semibold text-[#f5d8a1] transition hover:shadow-lg hover:shadow-[#292621]/10 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
