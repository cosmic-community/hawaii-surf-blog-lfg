# Hawaii Surf Blog

![Hawaii Surf Blog Preview](https://imgix.cosmicjs.com/749a6fb0-7078-11f0-a051-23c10f41277a-photo-1502933691298-84fc14542831-1754232308122.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive surf blog platform showcasing Hawaii's legendary surf culture, featuring expert surf reports, gear reviews, and spot guides from local Hawaiian surfers.

## ✨ Features

- **Dynamic Surf Content** - Detailed surf reports with wave conditions, heights, and expert ratings
- **Expert Gear Reviews** - In-depth reviews of surfboards and equipment tested in Hawaiian conditions  
- **Surf Spot Guides** - Comprehensive guides to Hawaii's best breaks from Pipeline to Waikiki
- **Author Profiles** - Local Hawaiian surf experts with detailed bios and credentials
- **Category Filtering** - Browse content by Surf Reports, Spot Guides, and Gear Reviews
- **Responsive Design** - Optimized for all devices with stunning surf photography
- **SEO Optimized** - Built for search visibility and social sharing
- **Fast Loading** - Advanced image optimization with imgix integration

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=688f758eb5e4a42c017a283a&clone_repository=68905154c4e9ffbb1dcd850a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Imgix** - Advanced image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your surf blog content

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd hawaii-surf-blog
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Surf Posts
```typescript
const response = await cosmic.objects
  .find({ type: 'surf-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

### Getting Post by Slug
```typescript
const response = await cosmic.objects.findOne({
  type: 'surf-posts',
  slug: 'epic-session-at-pipeline-today'
}).depth(2)

const post = response.object
```

### Filtering by Category
```typescript
const response = await cosmic.objects
  .find({ 
    type: 'surf-posts',
    'metadata.category': categoryId 
  })
  .depth(1)
```

## 🌊 Cosmic CMS Integration

This application leverages your existing Cosmic content structure:

### Content Types
- **Surf Posts** - Blog posts with surf conditions, ratings, and detailed content
- **Authors** - Surf expert profiles with bios, photos, and credentials  
- **Categories** - Content organization (Surf Reports, Spot Guides, Gear Reviews)

### Key Features
- **Object Relationships** - Authors and categories linked to posts
- **Rich Metadata** - Wave heights, wind conditions, surf ratings
- **File Management** - Optimized images with imgix integration
- **Select Dropdowns** - Structured data for wind conditions and surf ratings

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
COSMIC_BUCKET_SLUG=hawaii-surf-blog-production
COSMIC_READ_KEY=your-production-read-key
COSMIC_WRITE_KEY=your-production-write-key
```

### Other Deployment Platforms
- **Netlify** - Great for static deployments
- **Railway** - Simple container deployments
- **DigitalOcean App Platform** - Scalable hosting

The application is optimized for static generation where possible and includes proper error handling for production environments.

<!-- README_END -->