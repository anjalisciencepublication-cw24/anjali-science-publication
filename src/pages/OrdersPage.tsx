const orders = [
  { id: 'ASP-2026-000001', status: 'CONFIRMED', amount: '₹1,799', date: '12 Aug 2026' },
  { id: 'ASP-2026-000002', status: 'DISPATCHED', amount: '₹699', date: '09 Aug 2026' },
  { id: 'ASP-2026-000003', status: 'DELIVERED', amount: '₹2,149', date: '27 Jul 2026' },
]

export function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <h1 className="mb-6 text-3xl font-black text-slate-900">Orders</h1>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-bold">Order number</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold">Amount</th>
              <th className="px-4 py-3 font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-800">{order.id}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold uppercase text-amber-700">{order.status}</span></td>
                <td className="px-4 py-3 font-semibold text-slate-800">{order.amount}</td>
                <td className="px-4 py-3 text-slate-600">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
