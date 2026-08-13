import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpDown, Filter, Search, SlidersHorizontal } from 'lucide-react'
import { products, categories } from '../data'
import { ProductCard } from '../components/ProductCard'

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState(params.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sort, setSort] = useState(params.get('sort') || 'relevance')

  useEffect(() => {
    setSearch(params.get('search') || '')
  }, [params])

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase().trim()
    let items = [...products]

    if (selectedCategory !== 'All') {
      items = items.filter((product) => product.category === selectedCategory || product.classLevel === selectedCategory)
    }

    if (query) {
      items = items.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subject.toLowerCase().includes(query) ||
          product.classLevel.toLowerCase().includes(query) ||
          product.author.toLowerCase().includes(query) ||
          product.isbn.toLowerCase().includes(query),
      )
    }

    if (sort === 'price-low') {
      items.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-high') {
      items.sort((a, b) => b.price - a.price)
    } else if (sort === 'newest') {
      items.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating)
    } else if (sort === 'popular') {
      items.sort((a, b) => b.reviews - a.reviews)
    }

    return items
  }, [search, selectedCategory, sort])

  const applySort = (value: string) => {
    setSort(value)
    setParams(value !== 'relevance' ? { sort: value } : {})
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-10 rounded-[32px] border border-[#e7d7b8] bg-[#f6f1e9] px-6 py-8 shadow-[0_20px_60px_rgba(41,38,33,0.05)] lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a6a32]">Explore our books</p>
            <h1 className="mt-2 font-serif text-5xl text-[#292621] md:text-6xl">Premium academic catalog</h1>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[#e7d7b8] bg-white/80 px-4 py-3 shadow-sm md:min-w-[360px]">
            <Search className="h-4 w-4 text-[#9a6a32]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search books, subjects, ISBN..."
              className="w-full bg-transparent text-sm text-[#292621] outline-none placeholder:text-[#8a8175]"
            />
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? 'bg-[#292621] text-[#f5d8a1] shadow-lg shadow-[#292621]/10'
                : 'border border-[#e7d7b8] bg-white text-[#292621] hover:border-[#d4b896] hover:text-[#9a6a32]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-col gap-3 rounded-[28px] border border-[#e7d7b8] bg-white/80 p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-[#6b6560]">
          <Filter className="h-4 w-4 text-[#9a6a32]" />
          <span>{filteredProducts.length} books available</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#e7d7b8] bg-[#f6f1e9] px-3 py-2 text-sm text-[#292621]">
            <SlidersHorizontal className="h-4 w-4 text-[#9a6a32]" />
            <select
              value={sort}
              onChange={(e) => applySort(e.target.value)}
              className="bg-transparent text-sm text-[#292621] outline-none"
            >
              <option value="relevance">Relevance</option>
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#292621] px-4 py-2 text-sm font-medium text-[#f5d8a1]">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-full rounded-[28px] border border-dashed border-[#d4b896] bg-white/80 p-12 text-center">
            <p className="text-xl font-bold text-[#292621]">No books match your search.</p>
            <p className="mt-2 text-[#6b6560]">Try a different subject, class, or keyword.</p>
          </div>
        )}
      </div>
    </div>
  )
}
