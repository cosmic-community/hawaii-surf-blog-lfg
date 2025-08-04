import { SurfPost } from '@/types'
import PostCard from '@/components/PostCard'

interface RelatedPostsProps {
  posts: SurfPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post}
            showAuthor={true}
            showCategory={false}
          />
        ))}
      </div>
    </section>
  )
}