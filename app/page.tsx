import { cosmic, hasStatus } from '@/lib/cosmic'
import { SurfPost, Category, Author } from '@/types'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'
import Hero from '@/components/Hero'

async function getFeaturedPosts(): Promise<SurfPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'surf-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(6)

    return response.objects as SurfPost[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts')
  }
}

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
    throw new Error('Failed to fetch categories')
  }
}

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getFeaturedPosts(),
    getCategories()
  ])

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero post={featuredPost} />

      {/* Categories Filter */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
        <CategoryFilter categories={categories} />
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
        </div>
        
        {otherPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post}
                showAuthor={true}
                showCategory={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-600">
            <p>No posts available.</p>
          </div>
        )}
      </section>
    </div>
  )
}