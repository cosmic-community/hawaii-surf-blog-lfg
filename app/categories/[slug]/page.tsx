// app/categories/[slug]/page.tsx
import { cosmic, hasStatus } from '@/lib/cosmic'
import { SurfPost, Category } from '@/types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import CategoryHeader from '@/components/CategoryHeader'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'categories',
      slug
    }).props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch category')
  }
}

async function getCategoryPosts(categoryId: string): Promise<SurfPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'surf-posts',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as SurfPost[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts')
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return {
      title: 'Category Not Found - Hawaii Surf Blog'
    }
  }

  return {
    title: `${category.metadata.name} - Hawaii Surf Blog`,
    description: category.metadata.description || `Browse ${category.metadata.name} posts on Hawaii Surf Blog`,
    openGraph: {
      title: `${category.metadata.name} - Hawaii Surf Blog`,
      description: category.metadata.description || `Browse ${category.metadata.name} posts on Hawaii Surf Blog`,
    }
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const posts = await getCategoryPosts(category.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryHeader category={category} />
      
      <div className="mt-12">
        {posts.length > 0 ? (
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
        ) : (
          <div className="text-center py-12 text-gray-600">
            <p>No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}