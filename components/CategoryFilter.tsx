import Link from 'next/link'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          style={{ minWidth: '200px' }}
        >
          <div className="p-6 text-center">
            <div 
              className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold"
              style={{ backgroundColor: category.metadata.color || '#2196F3' }}
            >
              {category.metadata.name?.charAt(0) || 'C'}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {category.metadata.name}
            </h3>
            {category.metadata.description && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {category.metadata.description}
              </p>
            )}
          </div>
          
          {/* Hover overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: category.metadata.color || '#2196F3' }}
          ></div>
        </Link>
      ))}
    </div>
  )
}