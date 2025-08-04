import Link from 'next/link'
import { PostCardProps } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'
import AuthorInfo from '@/components/AuthorInfo'

export default function PostCard({ 
  post, 
  showAuthor = true, 
  showCategory = true, 
  className = "" 
}: PostCardProps) {
  const featuredImage = post.metadata.featured_image
  const author = post.metadata.author
  const category = post.metadata.category

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Featured Image */}
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <div className="aspect-video overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.title}
              width="400"
              height="225"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        {showCategory && category && (
          <div className="mb-3">
            <CategoryBadge category={category} />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.metadata.title || post.title}
          </Link>
        </h3>

        {/* Surf Conditions */}
        {(post.metadata.surf_spot || post.metadata.wave_height || post.metadata.surf_rating) && (
          <div className="mb-4 text-sm text-gray-600 space-y-1">
            {post.metadata.surf_spot && (
              <p><span className="font-medium">📍 Spot:</span> {post.metadata.surf_spot}</p>
            )}
            {post.metadata.wave_height && (
              <p><span className="font-medium">🌊 Waves:</span> {post.metadata.wave_height}</p>
            )}
            {post.metadata.surf_rating && (
              <p><span className="font-medium">⭐ Rating:</span> {post.metadata.surf_rating.value}</p>
            )}
          </div>
        )}

        {/* Author Info */}
        {showAuthor && author && (
          <AuthorInfo author={author} showBio={false} />
        )}
      </div>
    </article>
  )
}