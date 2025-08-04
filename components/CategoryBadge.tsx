import Link from 'next/link'
import { CategoryBadgeProps } from '@/types'

export default function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const badgeColor = category.metadata.color || '#2196F3'
  
  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white hover:opacity-80 transition-opacity ${className}`}
      style={{ backgroundColor: badgeColor }}
    >
      {category.metadata.name}
    </Link>
  )
}