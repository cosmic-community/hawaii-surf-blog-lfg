// app/posts/[slug]/page.tsx
import { cosmic, hasStatus } from '@/lib/cosmic'
import { SurfPost } from '@/types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import PostDetail from '@/components/PostDetail'
import RelatedPosts from '@/components/RelatedPosts'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<SurfPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'surf-posts',
      slug
    }).props(['id', 'title', 'slug', 'metadata', 'created_at']).depth(2)
    
    return response.object as SurfPost
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch post')
  }
}

async function getRelatedPosts(categoryId: string, currentPostId: string): Promise<SurfPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'surf-posts',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(3)

    const posts = response.objects as SurfPost[]
    return posts.filter(post => post.id !== currentPostId)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found - Hawaii Surf Blog'
    }
  }

  const description = post.metadata.content
    ? post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160)
    : 'Read this surf post on Hawaii Surf Blog'

  return {
    title: `${post.metadata.title || post.title} - Hawaii Surf Blog`,
    description,
    openGraph: {
      title: post.metadata.title || post.title,
      description,
      images: post.metadata.featured_image ? [
        {
          url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : []
    }
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.metadata.category 
    ? await getRelatedPosts(post.metadata.category.id, post.id)
    : []

  return (
    <div className="container mx-auto px-4 py-8">
      <PostDetail post={post} />
      
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </div>
  )
}