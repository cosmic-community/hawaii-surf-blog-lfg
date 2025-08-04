import Link from 'next/link'
import { SurfPost } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'
import AuthorInfo from '@/components/AuthorInfo'

interface HeroProps {
  post?: SurfPost
}

export default function Hero({ post }: HeroProps) {
  if (!post) {
    return (
      <section className="relative h-96 bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">🌊 Hawaii Surf Blog</h1>
          <p className="text-xl">Authentic Hawaiian surf culture and expert reports</p>
        </div>
      </section>
    )
  }

  const featuredImage = post.metadata.featured_image
  const category = post.metadata.category
  const author = post.metadata.author

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      {featuredImage && (
        <div className="absolute inset-0">
          <img
            src={`${featuredImage.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {category && (
            <div className="mb-4">
              <CategoryBadge category={category} />
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.metadata.title || post.title}
          </h1>
          
          {/* Surf Conditions */}
          {(post.metadata.surf_spot || post.metadata.wave_height || post.metadata.surf_rating) && (
            <div className="mb-6 text-lg space-y-1">
              {post.metadata.surf_spot && (
                <p>📍 {post.metadata.surf_spot}</p>
              )}
              {post.metadata.wave_height && (
                <p>🌊 {post.metadata.wave_height}</p>
              )}
              {post.metadata.surf_rating && (
                <p>⭐ {post.metadata.surf_rating.value}</p>
              )}
            </div>
          )}

          {author && (
            <div className="mb-8">
              <AuthorInfo author={author} showBio={false} />
            </div>
          )}

          <Link
            href={`/posts/${post.slug}`}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Full Report
          </Link>
        </div>
      </div>
    </section>
  )
}