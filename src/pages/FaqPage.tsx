import { faqs } from '../data'

export function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
      <div className="mb-12 space-y-3">
        <h1 className="font-serif text-5xl font-bold text-[#292621]">Frequently asked questions</h1>
        <p className="text-lg text-[#6b6560]">Find answers to common questions about Anjali books and orders</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[24px] border border-[#e7d7b8] bg-white/80 p-6 shadow-sm transition-all hover:border-[#d4b896] hover:shadow-md">
            <h2 className="font-serif text-xl font-bold text-[#292621]">{faq.question}</h2>
            <p className="mt-3 text-[#524f4a] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
