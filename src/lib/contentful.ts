// Contentful utilities for blog content management
// This is a preparation file for when Contentful is connected

// Environment variables for Contentful (to be set when connecting)
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// Type definitions for blog content
export interface BlogPostType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishDate: string;
  tags: string[];
  category: string;
  featured: boolean;
}

export interface AuthorType {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  email: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

// Placeholder functions for Contentful integration
// These will be implemented when Contentful is connected

export async function getAllBlogPosts(
  preview = false
): Promise<BlogPostType[]> {
  // TODO: Implement Contentful connection
  // For now, return empty array - this will be connected to Contentful later
  console.log("Contentful not connected yet. Preview mode:", preview);
  return [];
}

export async function getBlogPost(
  slug: string,
  preview = false
): Promise<BlogPostType | null> {
  // TODO: Implement Contentful connection
  console.log("Fetching blog post with slug:", slug, "Preview mode:", preview);
  return null;
}

export async function getFeaturedBlogPosts(
  preview = false
): Promise<BlogPostType[]> {
  // TODO: Implement Contentful connection
  console.log("Contentful not connected yet. Preview mode:", preview);
  return [];
}

export async function getBlogPostsByCategory(
  categorySlug: string,
  preview = false
): Promise<BlogPostType[]> {
  // TODO: Implement Contentful connection
  console.log(
    "Fetching posts for category:",
    categorySlug,
    "Preview mode:",
    preview
  );
  return [];
}

export async function getBlogPostsByTag(
  tag: string,
  preview = false
): Promise<BlogPostType[]> {
  // TODO: Implement Contentful connection
  console.log("Fetching posts for tag:", tag, "Preview mode:", preview);
  return [];
}

export async function getRecentBlogPosts(
  limit = 5,
  preview = false
): Promise<BlogPostType[]> {
  // TODO: Implement Contentful connection
  console.log("Fetching recent posts, limit:", limit, "Preview mode:", preview);
  return [];
}

export async function getAllAuthors(preview = false): Promise<AuthorType[]> {
  // TODO: Implement Contentful connection
  console.log("Contentful not connected yet. Preview mode:", preview);
  return [];
}

export async function getAllCategories(
  preview = false
): Promise<CategoryType[]> {
  // TODO: Implement Contentful connection
  console.log("Contentful not connected yet. Preview mode:", preview);
  return [];
}

// Utility functions
export function parseContentfulAsset(url: string): string {
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

export function renderRichText(
  content: Record<string, unknown> | string
): string {
  // Simplified rich text rendering
  // In a real implementation, this would use @contentful/rich-text-react-renderer
  if (typeof content === "string") return content;

  // For now, return a placeholder
  return "Rich text content will be rendered here when Contentful is connected.";
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Instructions for setting up Contentful
export const CONTENTFUL_SETUP_INSTRUCTIONS = `
To connect this website to Contentful:

1. Create a Contentful space at https://www.contentful.com/
2. Set up content models:

   Blog Post Content Model (ID: blogPost):
   - Title (Short text, required)
   - Slug (Short text, required, unique)
   - Excerpt (Long text, required)
   - Content (Rich text, required)
   - Featured Image (Media, required)
   - Author (Short text, required)
   - Publish Date (Date & time, required)
   - Tags (Short text, list)
   - Category (Short text, required)
   - Featured (Boolean)

   Author Content Model (ID: author):
   - Name (Short text, required)
   - Bio (Long text)
   - Avatar (Media)
   - Email (Short text)
   - Social Media (JSON object)

   Category Content Model (ID: category):
   - Name (Short text, required)
   - Slug (Short text, required, unique)
   - Description (Long text)
   - Color (Short text)

3. Add environment variables to .env.local:
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token

4. Install additional dependencies:
   npm install @contentful/rich-text-react-renderer

5. Update this file to use the actual Contentful SDK
`;

// Export configuration status
export const CONTENTFUL_CONFIGURED = !!(
  CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN
);

if (!CONTENTFUL_CONFIGURED) {
  console.log(
    "Contentful not configured. See CONTENTFUL_SETUP_INSTRUCTIONS for setup guide."
  );
}
