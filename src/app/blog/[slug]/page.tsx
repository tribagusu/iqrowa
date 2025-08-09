import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sampleBlogPosts } from "@/data/sampleData";
import { createSlug } from "@/lib/contentful";
import Card, { CardContent } from "@/components/ui/Card";

export async function generateStaticParams() {
  return sampleBlogPosts.map((p) => ({ slug: createSlug(p.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = sampleBlogPosts.find((p) => createSlug(p.title) === params.slug);
  if (!post) return { title: "Article" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = sampleBlogPosts.find((p) => createSlug(p.title) === params.slug);
  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Use next/image for optimization */}
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="relative bg-emerald-900/60">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-white/90 max-w-3xl">{post.excerpt}</p>
            <div className="mt-6 text-sm text-white/80">
              By {post.author} • {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-emerald">
          <p>
            {post.content ||
              "This is a sample article body. Replace this with rich content from your CMS. It demonstrates the layout and typography for blog articles on IMA Australia."}
          </p>
          <p>
            Our mission is to build bridges, foster understanding, and create
            positive change in our communities through Islamic values,
            education, and service to humanity.
          </p>
        </div>
      </section>

      {/* Sidebar/related */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="flex items-center justify-between flex-wrap gap-3">
              <div className="text-gray-700">
                Explore more articles and insights from our community.
              </div>
              <Link
                href="/blog"
                className="rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
              >
                Back to Blog
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  );
}
