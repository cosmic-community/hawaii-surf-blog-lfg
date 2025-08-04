import Link from 'next/link'
import { cosmic, hasStatus } from '@/lib/cosmic'
import { Category } from '@/types'

async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])

    return response.objects as Category[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    return []
  }
}

export default async function Header() {
  const categories = await getCategories()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">🌊</div>
            <span className="text-xl font-bold text-gray-900">Hawaii Surf Blog</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {category.metadata.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}