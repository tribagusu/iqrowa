import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { sampleEvents, sampleBlogPosts } from "@/data/sampleData";

// Simple Card component
function Card({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const baseClasses =
    "bg-white rounded-xl p-6 shadow-sm border border-gray-200";
  const hoverClasses = hover
    ? "hover:shadow-lg transition-all duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}

// Simple Button component
function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-teal-600 text-white hover:bg-teal-700",
    outline:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    xl: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building Bridges,
            <span className="block text-teal-300">Fostering Unity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
            Welcome to the International Madani Association Australia. We are
            dedicated to building bridges, fostering understanding, and creating
            positive change in our communities through Islamic values,
            education, and service to humanity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" variant="secondary">
              Join Our Community
              <UserGroupIcon className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <PlayIcon className="h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Community Members", value: "2,500+" },
            { label: "Programs Running", value: "15+" },
            { label: "Events This Year", value: "120+" },
            { label: "Families Helped", value: "800+" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center text-white bg-white/10 backdrop-blur-md border-white/20"
            >
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Recent Activities Section
function RecentActivities() {
  const recentEvents = sampleEvents.slice(0, 3);
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Activities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with our latest events and community activities
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentEvents.map((event) => (
            <Card key={event.id} hover className="overflow-hidden">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                    {event.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {event.description}
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-emerald-600" />
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-2 text-emerald-600" />
                  {event.location}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/events">
            <Button variant="primary">
              View All Events
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RecentArticles() {
  const recentPosts = sampleBlogPosts.slice(0, 3);
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Insights, reflections, and educational content from our community
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.id} hover className="overflow-hidden">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Read More
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <Button variant="primary">
              View All Articles
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Our Community Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Be part of a growing community dedicated to positive change,
            spiritual growth, and service to humanity. Together, we can make a
            difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" variant="secondary">
              Become a Member
              <UserGroupIcon className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Make a Donation
              <HeartIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecentActivities />
      <RecentArticles />
      <CallToAction />
    </div>
  );
}
