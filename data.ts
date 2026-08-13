export type Product = {
  id: string
  name: string
  slug: string
  category: string
  subject: string
  classLevel: string
  price: number
  mrp: number
  stock: number
  rating: number
  reviews: number
  badge: string
  description: string
  image: string
  isbn: string
  sku: string
  author: string
  publisher: string
  language: string
  pages: number
  edition: string
}

export const categories = [
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Question Banks',
  'Practical Books',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
]

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Physics for Class 12',
    slug: 'physics-for-class-12',
    category: 'Physics',
    subject: 'Physics',
    classLevel: 'Class 12',
    price: 499,
    mrp: 699,
    stock: 26,
    rating: 4.8,
    reviews: 1240,
    badge: 'Best Seller',
    description: 'Board-focused physics book with concept clarity, numerical problem solving, and exam strategies.',
    image: 'linear-gradient(135deg, #dbeafe, #c7d2fe)',
    isbn: '978-93-12345-12-1',
    sku: 'ASP-PHY-12-P1',
    author: 'Dr. Anjali Sharma',
    publisher: 'Anjali Science Publication',
    language: 'Hindi + English',
    pages: 368,
    edition: '2026 Edition',
  },
  {
    id: 'p2',
    name: 'Chemistry Mastery',
    slug: 'chemistry-mastery',
    category: 'Chemistry',
    subject: 'Chemistry',
    classLevel: 'Class 11',
    price: 459,
    mrp: 649,
    stock: 18,
    rating: 4.7,
    reviews: 980,
    badge: 'New',
    description: 'Detailed chemistry explanations, chapter tests, reactions, and practical applications for school success.',
    image: 'linear-gradient(135deg, #e0f2fe, #e2e8f0)',
    isbn: '978-93-12345-22-2',
    sku: 'ASP-CHEM-11-P2',
    author: 'A. N. Verma',
    publisher: 'Anjali Science Publication',
    language: 'English',
    pages: 420,
    edition: '2026 Edition',
  },
  {
    id: 'p3',
    name: 'Biology Refresher',
    slug: 'biology-refresher',
    category: 'Biology',
    subject: 'Biology',
    classLevel: 'Class 10',
    price: 529,
    mrp: 739,
    stock: 11,
    rating: 4.9,
    reviews: 1550,
    badge: 'Popular',
    description: 'Biology study guide with diagrams, definitions, quick revision charts, and chapter tests.',
    image: 'linear-gradient(135deg, #dcfce7, #d1fae5)',
    isbn: '978-93-12345-31-3',
    sku: 'ASP-BIO-10-P3',
    author: 'Dr. Meena Joshi',
    publisher: 'Anjali Science Publication',
    language: 'Hindi',
    pages: 290,
    edition: '2025 Edition',
  },
  {
    id: 'p4',
    name: 'Math Practice Set',
    slug: 'math-practice-set',
    category: 'Mathematics',
    subject: 'Mathematics',
    classLevel: 'Class 9',
    price: 389,
    mrp: 559,
    stock: 33,
    rating: 4.6,
    reviews: 780,
    badge: 'Trending',
    description: 'Practice-focused mathematics workbook covering formulas, logical reasoning and exam drills.',
    image: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    isbn: '978-93-12345-42-4',
    sku: 'ASP-MATH-09-P4',
    author: 'Rohit Sethi',
    publisher: 'Anjali Science Publication',
    language: 'English',
    pages: 310,
    edition: '2026 Edition',
  },
  {
    id: 'p5',
    name: 'Class 12 Physics Question Bank',
    slug: 'class-12-physics-question-bank',
    category: 'Question Banks',
    subject: 'Physics',
    classLevel: 'Class 12',
    price: 599,
    mrp: 799,
    stock: 9,
    rating: 4.9,
    reviews: 1420,
    badge: 'Top Rated',
    description: 'Extensive solved and unsolved practice questions aligned to board and competitive exam patterns.',
    image: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    isbn: '978-93-12345-52-5',
    sku: 'ASP-QBANK-PHY-12-P5',
    author: 'N. K. Khanna',
    publisher: 'Anjali Science Publication',
    language: 'English',
    pages: 448,
    edition: '2026 Edition',
  },
  {
    id: 'p6',
    name: 'Practical Chemistry Lab Manual',
    slug: 'practical-chemistry-lab-manual',
    category: 'Practical Books',
    subject: 'Chemistry',
    classLevel: 'Class 12',
    price: 349,
    mrp: 499,
    stock: 50,
    rating: 4.5,
    reviews: 640,
    badge: 'Lab Ready',
    description: 'Lab experiments, observations, record sheet templates, and viva prep for chemistry practicals.',
    image: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    isbn: '978-93-12345-63-6',
    sku: 'ASP-LAB-CHEM-12-P6',
    author: 'S. Malhotra',
    publisher: 'Anjali Science Publication',
    language: 'Hindi + English',
    pages: 220,
    edition: '2025 Edition',
  },
]

export const testimonials = [
  { name: 'Aarav', title: 'Class 12 Science Student', quote: 'The explanations are simple and highly exam-focused. My marks improved after using these books.' },
  { name: 'Priya', title: 'Parent', quote: 'Trustworthy service, quick delivery, and books that actually help students understand concepts deeply.' },
  { name: 'Raghav', title: 'Teacher', quote: 'Anjali Science books cover practical skills and board patterns perfectly for classroom support.' },
]

export const faqs = [
  { question: 'Do you deliver across India?', answer: 'Yes. We deliver across India via our internal shipping logistics and trusted courier partners.' },
  { question: 'Can I order books for my school or coaching center?', answer: 'Yes. We support bulk and institutional orders through our sales and support team.' },
  { question: 'Are the books updated as per the latest syllabus?', answer: 'Yes. We publish and revise titles to match current board and exam patterns.' },
  { question: 'How do I track my order?', answer: 'Once dispatched, you can track your order from the tracking section in your account or order confirmation email.' },
]

export const policyMap = {
  privacy: { title: 'Privacy Policy', description: 'We protect customer data and do not sell personal information. We use secure systems for checkout and order tracking.' },
  terms: { title: 'Terms & Conditions', description: 'Use of the website implies acceptance of our terms for browsing, ordering, and communication.' },
  shipping: { title: 'Shipping Policy', description: 'We ship India-wide with standard and express delivery planning based on pincode serviceability.' },
  cancellation: { title: 'Cancellation Policy', description: 'Cancellation eligibility depends on order status and whether the order has entered the shipping process.' },
  return: { title: 'Return Policy', description: 'Returns are accepted for eligible damaged, defective, or incorrect items subject to inspection.' },
  refund: { title: 'Refund Policy', description: 'Refunds are processed after approval and may take 5–10 business days depending on the payment method.' },
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Categories', href: '/categories' },
  { label: 'New Arrivals', href: '/shop?sort=newest' },
  { label: 'Best Sellers', href: '/shop?sort=popular' },
]
