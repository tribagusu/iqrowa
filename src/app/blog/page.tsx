import { Metadata } from "next";
import {
  MagnifyingGlassIcon,
  TagIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { sampleBlogPosts } from "@/data/sampleData";
import {
  CONTENTFUL_SETUP_INSTRUCTIONS,
  CONTENTFUL_CONFIGURED,
} from "@/lib/contentful";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Articles & Insights",
  description:
    "Explore our latest articles, insights, and educational content from the International Madani Association Australia community.",
};

// Featured Post Component
function FeaturedPost({
  post,
}: {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    tags: string[];
  };
}) {
  const slug = post.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return (
    <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative h-64 lg:h-full">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
            Featured
          </span>
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <UserIcon className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl mb-4">
          {post.title}
        </h2>
        <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
            >
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`}>
          <Button size="lg">Read Full Article</Button>
        </Link>
      </div>
    </Card>
  );
}

// Blog Post Card Component
function BlogPostCard({
  post,
}: {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    tags: string[];
  };
}) {
  const slug = post.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return (
    <Card hover className="overflow-hidden h-full">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <UserIcon className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`} className="block">
          <Button variant="outline" size="sm" className="w-full">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

// Search and Filter Component
function SearchAndFilter() {
  const categories = [
    "All Posts",
    "Community",
    "Islamic Teachings",
    "Youth",
    "Education",
    "Spirituality",
    "Social Change",
  ];

  return (
    <div className="bg-muted/50 p-6 rounded-xl mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Posts" ? "primary" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contentful Setup Notice
function ContentfulNotice() {
  if (CONTENTFUL_CONFIGURED) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">
        🚀 Ready for Contentful Integration
      </h3>
      <p className="text-blue-800 mb-4">
        This blog is prepared for Contentful CMS integration. Currently showing
        sample data.
      </p>
      <details className="text-sm text-blue-700">
        <summary className="cursor-pointer font-medium hover:text-blue-900">
          View setup instructions
        </summary>
        <pre className="mt-2 p-3 bg-white border border-blue-200 rounded text-xs overflow-x-auto">
          {CONTENTFUL_SETUP_INSTRUCTIONS}
        </pre>
      </details>
    </div>
  );
}

// Newsletter Signup Component
function NewsletterSignup() {
  return (
    <Card className="bg-gradient-to-r from-primary to-secondary text-white">
      <CardContent className="text-center">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90 mb-6">
          Subscribe to our newsletter for the latest articles and community
          updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border-0 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/20"
          />
          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Blog Page Component
export default function BlogPage() {
  const featuredPost = sampleBlogPosts[0];
  const otherPosts = sampleBlogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Blog & Articles
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Discover insights, reflections, and educational content from our
              community. Explore Islamic teachings, community stories, and
              guidance for modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentfulNotice />

          <SearchAndFilter />

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Article
            </h2>
            <FeaturedPost post={featuredPost} />
          </div>

          {/* Recent Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Recent Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </section>

      {/* Sidebar Section */}
      <aside className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Islamic Teachings",
                    "Community",
                    "Youth",
                    "Education",
                    "Spirituality",
                    "Australia",
                    "Ramadan",
                    "Family",
                    "Charity",
                    "Interfaith",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary cursor-pointer hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "Sarah M.",
                      comment: "Beautiful insights on community building...",
                      post: "The Importance of Community",
                    },
                    {
                      user: "Ahmed K.",
                      comment: "Thank you for sharing this perspective...",
                      post: "Youth Voices",
                    },
                    {
                      user: "Fatima A.",
                      comment: "This article really resonated with me...",
                      post: "Ramadan Reflections",
                    },
                  ].map((comment, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-3 last:border-b-0"
                    >
                      <p className="text-sm text-gray-600 line-clamp-2">
                        &ldquo;{comment.comment}&rdquo;
                      </p>
                      <div className="mt-1 text-xs text-gray-500">
                        <span className="font-medium">{comment.user}</span> on{" "}
                        <span className="text-primary">{comment.post}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Archive */}
            <Card>
              <CardHeader>
                <CardTitle>Archive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { month: "January 2024", count: 5 },
                    { month: "December 2023", count: 8 },
                    { month: "November 2023", count: 6 },
                    { month: "October 2023", count: 7 },
                    { month: "September 2023", count: 4 },
                  ].map((archive) => (
                    <div
                      key={archive.month}
                      className="flex items-center justify-between text-sm hover:text-primary cursor-pointer"
                    >
                      <span>{archive.month}</span>
                      <span className="text-gray-500">({archive.count})</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
    </div>
  );
}
