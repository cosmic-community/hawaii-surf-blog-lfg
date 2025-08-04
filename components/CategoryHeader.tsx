import { Category } from '@/types'

interface CategoryHeaderProps {
  category: Category
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  const categoryColor = category.metadata.color || '#2196F3'

  return (
    <div className="text-center mb-12">
      <div 
        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold"
        style={{ backgroundColor: categoryColor }}
      >
        {category.metadata.name?.charAt(0) || 'C'}
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {category.metadata.name}
      </h1>
      
      {category.metadata.description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {category.metadata.description}
        </p>
      )}
    </div>
  )
}