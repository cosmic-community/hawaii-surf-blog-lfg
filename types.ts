// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    years_surfing?: number;
    favorite_spot?: string;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    color?: string;
  };
}

// Surf Post interface
export interface SurfPost extends CosmicObject {
  type: 'surf-posts';
  metadata: {
    title: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    category?: Category;
    surf_spot?: string;
    wave_height?: string;
    wind_conditions?: {
      key: WindCondition;
      value: string;
    };
    surf_rating?: {
      key: SurfRating;
      value: string;
    };
  };
}

// Type literals for select-dropdown values
export type WindCondition = 'offshore' | 'onshore' | 'cross-shore' | 'light';
export type SurfRating = 'poor' | 'fair' | 'good' | 'excellent' | 'epic';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Component prop types
export interface PostCardProps {
  post: SurfPost;
  showAuthor?: boolean;
  showCategory?: boolean;
  className?: string;
}

export interface AuthorCardProps {
  author: Author;
  className?: string;
}

export interface CategoryBadgeProps {
  category: Category;
  className?: string;
}