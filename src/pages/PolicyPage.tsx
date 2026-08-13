import { useParams } from 'react-router-dom'
import { policyMap } from '../data'

export function PolicyPage() {
  const { slug } = useParams()
  const key = (slug as keyof typeof policyMap) || 'privacy'
  const policy = policyMap[key] ?? policyMap.privacy

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 lg:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900">{policy.title}</h1>
        <p className="mt-5 text-slate-600">{policy.description}</p>
        <div className="mt-6 space-y-4 text-slate-600">
          <p>We are committed to transparent communication, secure transactions, and a fair shopping experience for all customers.</p>
          <p>Orders are processed carefully, customer support is available for questions, and policy updates may be communicated via email and website notices.</p>
          <p>For operational clarity, all claims and dispute resolutions are handled in accordance with the terms of service and local ecommerce regulations.</p>
        </div>
      </div>
    </div>
  )
}
