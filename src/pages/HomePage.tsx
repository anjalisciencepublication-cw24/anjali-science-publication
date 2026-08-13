import { useEffect, useState } from 'react'
import { ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'

const subjectCategories = [
  { label: 'Physics', desc: 'Concepts • Problems • Exam Prep', accent: 'Class 11', title: 'Physics Mastery', year: '2026 Edition' },
  { label: 'Chemistry', desc: 'Theory • Practice • Mastery', accent: 'Class 11', title: 'Chemistry Mastery', year: '2026 Edition' },
  { label: 'Biology', desc: 'Concepts • Diagrams • Revision', accent: 'Class 10', title: 'Biology Refresher', year: '2025 Edition' },
  { label: 'Mathematics', desc: 'Practice • Solving • Excellence', accent: 'Class 9', title: 'Math Practice Set', year: '2026 Edition' },
]

const classes = [
  { class: 'Class 9', subjects: 'Physics, Chemistry, Biology, Mathematics' },
  { class: 'Class 10', subjects: 'Physics, Chemistry, Biology, Mathematics' },
  { class: 'Class 11', subjects: 'Physics, Chemistry, Biology, Mathematics' },
  { class: 'Class 12', subjects: 'Physics, Chemistry, Biology, Mathematics' },
]

const featuredProducts = [
  { id: 'p1', slug: 'physics-for-class-12', name: 'Physics for Class 12', price: 499, mrp: 699, badge: 'Best Seller', category: 'Physics', rating: 4.8, reviews: 1240 },
  { id: 'p2', slug: 'chemistry-mastery', name: 'Chemistry Mastery', price: 459, mrp: 649, badge: 'New', category: 'Chemistry', rating: 4.7, reviews: 980 },
  { id: 'p3', slug: 'biology-refresher', name: 'Biology Refresher', price: 529, mrp: 739, badge: 'Popular', category: 'Biology', rating: 4.9, reviews: 1550 },
  { id: 'p4', slug: 'math-practice-set', name: 'Math Practice Set', price: 389, mrp: 559, badge: 'Trending', category: 'Mathematics', rating: 4.6, reviews: 780 },
]

const benefits = [
  {
    title: 'Concept First',
    desc: 'Books designed to build genuine understanding, not just memorization'
  },
  {
    title: 'Exam Ready',
    desc: 'Focused preparation for board and competitive examinations'
  },
  {
    title: 'Made for Students',
    desc: 'Clear explanations, structured practice and thoughtful presentation'
  },
  {
    title: 'Trusted Publishing',
    desc: 'Reliable academic resources developed with educational expertise'
  },
]

export function HomePage() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCategoryIndex((current) => (current + 1) % subjectCategories.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const activeCategory = subjectCategories[activeCategoryIndex]

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.4),_rgba(250,248,243,0.98)_35%,_rgba(244,239,232,1)_100%)] pt-6 lg:pt-12">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e7d7b8] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a6a32]">
                  Featured edition
                </span>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a8175]">Premium academic publishing</p>
                <h1 className="max-w-xl font-serif text-5xl leading-[0.9] text-[#292621] md:text-6xl lg:text-[5.3rem]">
                  Master concepts with books crafted for <span className="text-[#9a6a32]">academic excellence</span>.
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-[#524f4a] md:text-lg">
                  Discover trusted science resources for Class 9–12, from core theory and practical lab work to high-impact exam preparation and revision support.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-[#292621] px-7 py-3.5 text-sm font-semibold text-[#f5d8a1] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#292621]/10"
                >
                  View Book <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e7d7b8] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#292621] transition-all hover:border-[#d4b896] hover:bg-[#f8f4ee]"
                >
                  Buy Now <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-[#e7d7b8] pt-7">
                {[
                  { label: '2026 Edition', value: 'New' },
                  { label: 'Class 11', value: 'Physics' },
                  { label: 'Chemistry', value: 'Board Ready' },
                ].map((info) => (
                  <div key={info.label} className="min-w-[110px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8175]">{info.label}</p>
                    <p className="mt-2 text-base font-semibold text-[#292621]">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -left-8 top-8 h-52 w-52 rounded-full bg-[#f3dfb1]/40 blur-3xl" />
              <div className="absolute -right-6 bottom-12 h-64 w-64 rounded-full bg-[#dfe9ff]/40 blur-3xl" />

              <div className="relative w-full max-w-[520px] rounded-[32px] border border-[#e7d7b8] bg-white/70 p-5 shadow-[0_30px_80px_rgba(41,38,33,0.08)] backdrop-blur-sm">
                <div className="mb-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a6a32]">
                  <span>Featured collection</span>
                  <span>₹899</span>
                </div>

                <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(231,215,184,0.75),_rgba(250,248,243,1)_40%,_rgba(244,239,232,1)_100%)] p-6">
                  <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-[#e7d7b8] bg-white/40" />
                  <div className="absolute right-8 top-12 h-16 w-16 rounded-full border border-[#e7d7b8] bg-[#f8f4ee]" />

                  <div key={activeCategory.label} className="category-rotator relative flex -rotate-[10deg] items-end justify-center">
                    <div className="relative h-[350px] w-[240px] rounded-[18px] border border-[#d9c9a4] bg-[linear-gradient(120deg,#101827_0%,#1d2a3b_18%,#f8f4ee_18%,#f8f4ee_100%)] p-4 shadow-[0_48px_80px_rgba(17,24,39,0.30)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                      <div className="absolute inset-0 rounded-[18px] border border-[#d9c9a4]/80" />
                      <div className="relative flex h-full w-full flex-col justify-between rounded-[12px] bg-[linear-gradient(180deg,#f8f4ef_0%,#eadcc0_100%)] p-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a6a32]">Anjali</p>
                          <h3 className="mt-4 font-serif text-3xl leading-tight text-[#292621]">{activeCategory.label}</h3>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8175]">{activeCategory.accent}</p>
                          <p className="mt-3 text-lg font-semibold text-[#292621]">{activeCategory.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div key={activeCategory.label + '-panel'} className="category-rotator mt-5 rounded-[22px] border border-[#e7d7b8] bg-[#f8f4ee] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8175]">Category</p>
                      <h3 className="mt-2 font-serif text-3xl text-[#292621]">{activeCategory.label}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8175]">Edition</p>
                      <p className="mt-2 text-sm font-semibold text-[#292621]">{activeCategory.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            {subjectCategories.map((item, index) => (
              <Link
                key={item.label}
                to="/shop"
                className={`group flex flex-1 items-center justify-between rounded-[24px] border p-4 transition-all duration-500 ${
                  activeCategoryIndex === index
                    ? 'scale-[1.01] border-[#d4b896] bg-white shadow-[0_20px_50px_rgba(41,38,33,0.04)]'
                    : 'border-[#e7d7b8] bg-white/70 hover:-translate-y-1 hover:border-[#d4b896] hover:bg-white'
                }`}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8175]">Subject</p>
                  <h3 className="mt-2 font-serif text-3xl text-[#292621]">{item.label}</h3>
                  <p className="mt-1 text-xs text-[#6b6560]">{item.desc}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d7b8] bg-[#f8f4ee] text-[#9a6a32] transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gradient-to-r from-ivory via-cream to-ivory border-y border-champagne/60 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center py-4 border-champagne/40 md:border-0 md:py-0">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-bronze-700 mb-2">
                30K+
              </p>
              <p className="text-sm text-charcoal font-medium">Happy Students</p>
            </div>
            <div className="text-center border-l border-r border-champagne/40 py-4 md:border-0 md:py-0">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-bronze-700 mb-2">
                500+
              </p>
              <p className="text-sm text-charcoal font-medium">Quality Titles</p>
            </div>
            <div className="text-center py-4 md:py-0">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-bronze-700 mb-2">
                4.8/5
              </p>
              <p className="text-sm text-charcoal font-medium">Average Rating</p>
            </div>
            <div className="text-center border-l border-r border-champagne/40 py-4 md:border-0 md:py-0">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-bronze-700 mb-2">
                15+
              </p>
              <p className="text-sm text-charcoal font-medium">Years Publishing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Books - Subjects */}
      <section className="bg-gradient-to-b from-[#faf8f3] via-[#f4efe8] to-[#faf8f3] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#292621]">
              Explore Our Books
            </h2>
            <p className="text-lg text-[#6b6560] max-w-2xl">
              Purposefully designed resources for every stage of academic learning
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjectCategories.map((cat) => (
              <Link
                key={cat.label}
                to={`/shop?category=${cat.label.toLowerCase()}`}
                className="group rounded-[24px] border border-[#e7d7b8] bg-white/80 p-6 transition-all hover:border-[#d4b896] hover:shadow-md hover:shadow-[#292621]/8 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#292621] mb-1">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-[#6b6560]">{cat.desc}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#9a6a32] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Class */}
      <section className="bg-gradient-to-b from-[#faf8f3] to-[#f4efe8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#292621]">
              Choose Your Class
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {classes.map((item, idx) => (
              <Link
                key={item.class}
                to={`/shop?class=${item.class.split(' ')[1]}`}
                className={`group rounded-[24px] border transition-all hover:shadow-md hover:shadow-[#292621]/10 hover:-translate-y-1 p-8 ${
                  idx % 2 === 0
                    ? 'bg-white/70 border-[#e7d7b8] hover:border-[#d4b896]'
                    : 'bg-white/80 border-[#e7d7b8] hover:border-[#d4b896]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-[#292621] mb-2">
                      {item.class}
                    </h3>
                    <p className="text-sm text-[#6b6560]">{item.subjects}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-[#9a6a32] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-gradient-to-b from-cream to-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
              Featured Books
            </h2>
            <Link to="/shop" className="hidden md:flex items-center gap-1 text-sm font-medium text-bronze-700 hover:text-bronze-800">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                mrp={product.mrp}
                badge={product.badge}
                category={product.category}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Anjali Section */}
      <section className="bg-gradient-to-b from-white via-ivory to-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
              Why Students Choose Anjali
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-champagne/70 bg-white p-6 transition-all hover:border-champagne hover:shadow-md hover:shadow-warm-900/8 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-champagne/40 group-hover:bg-champagne/60 transition-colors">
                  <div className="h-6 w-6 rounded-full bg-bronze-600 group-hover:bg-bronze-700" />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-warm-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-cream to-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
              What Students Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-warm-700">
              Real feedback from students who've achieved success with our books
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: 'The concepts are explained so clearly! Scored 92% in Physics with this book.', author: 'Priya, Delhi', rating: 5 },
              { quote: 'Best investment for board exam prep. The examples and practice problems are excellent.', author: 'Arjun, Mumbai', rating: 5 },
              { quote: 'Fast delivery, premium quality paper, and accurate content. Highly recommended!', author: 'Ananya, Bangalore', rating: 5 },
            ].map((review, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-champagne/70 bg-white p-6 transition-all hover:border-champagne hover:shadow-md hover:shadow-warm-900/8 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-bronze-600 text-bronze-600" />
                  ))}
                </div>
                <p className="text-charcoal mb-6 leading-relaxed italic">
                  "{review.quote}"
                </p>
                <div className="pt-4 border-t border-champagne/40">
                  <p className="text-sm font-bold text-charcoal">{review.author}</p>
                  <p className="text-xs text-warm-700 font-medium">Verified Student</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-espresso py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
            Stay Ahead
          </h2>
          <p className="text-lg text-warm-200 mb-8">
            Get new book launches, study resources and exclusive offers directly to your inbox.
          </p>

          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-charcoal font-medium focus:ring-2 focus:ring-bronze-400 outline-none"
            />
            <button className="px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-bronze-600/30">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-warm-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  )
}
