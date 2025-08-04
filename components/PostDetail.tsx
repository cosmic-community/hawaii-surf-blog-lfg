import { SurfPost } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'
import AuthorInfo from '@/components/AuthorInfo'

interface PostDetailProps {
  post: SurfPost
}

export default function PostDetail({ post }: PostDetailProps) {
  const featuredImage = post.metadata.featured_image
  const author = post.metadata.author
  const category = post.metadata.category

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        {category && (
          <div className="mb-4">
            <CategoryBadge category={category} />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.metadata.title || post.title}
        </h1>

        {author && (
          <AuthorInfo author={author} showBio={true} />
        )}
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8 aspect-video overflow-hidden rounded-lg">
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={post.title}
            width="1200"
            height="675"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Surf Conditions */}
      {(post.metadata.surf_spot || post.metadata.wave_height || post.metadata.wind_conditions || post.metadata.surf_rating) && (
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🌊 Surf Conditions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {post.metadata.surf_spot && (
              <div>
                <span className="font-medium text-gray-600">Spot:</span>
                <p className="text-gray-900">{post.metadata.surf_spot}</p>
              </div>
            )}
            {post.metadata.wave_height && (
              <div>
                <span className="font-medium text-gray-600">Wave Height:</span>
                <p className="text-gray-900">{post.metadata.wave_height}</p>
              </div>
            )}
            {post.metadata.wind_conditions && (
              <div>
                <span className="font-medium text-gray-600">Wind:</span>
                <p className="text-gray-900">{post.metadata.wind_conditions.value}</p>
              </div>
            )}
            {post.metadata.surf_rating && (
              <div>
                <span className="font-medium text-gray-600">Rating:</span>
                <p className="text-gray-900">{post.metadata.surf_rating.value}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.metadata.content }}
      />
    </article>
  )
}