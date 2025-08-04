import { Author } from '@/types'

interface AuthorInfoProps {
  author: Author
  showBio?: boolean
  className?: string
}

export default function AuthorInfo({ author, showBio = true, className = "" }: AuthorInfoProps) {
  const profilePhoto = author.metadata.profile_photo

  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      {/* Profile Photo */}
      {profilePhoto && (
        <div className="flex-shrink-0">
          <img
            src={`${profilePhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={author.metadata.name}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      )}

      {/* Author Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <h4 className="text-sm font-semibold text-gray-900">
            {author.metadata.name}
          </h4>
          {author.metadata.years_surfing && (
            <span className="text-xs text-gray-500">
              {author.metadata.years_surfing} years surfing
            </span>
          )}
        </div>

        {author.metadata.favorite_spot && (
          <p className="text-xs text-gray-600 mb-1">
            📍 Favorite spot: {author.metadata.favorite_spot}
          </p>
        )}

        {showBio && author.metadata.bio && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {author.metadata.bio}
          </p>
        )}
      </div>
    </div>
  )
}