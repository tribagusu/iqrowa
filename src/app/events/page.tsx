import { Metadata } from "next";
import Image from "next/image";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { sampleEvents } from "@/data/sampleData";

export const metadata: Metadata = {
  title: "Events - Community Activities & Programs",
  description:
    "Join our upcoming events, workshops, and community activities. Stay connected with the IMA Australia community.",
};

const eventCategories = [
  "All Events",
  "Religious",
  "Education",
  "Community Service",
  "Youth",
  "Interfaith",
  "Cultural",
];

function EventCard({
  event,
}: {
  event: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    featured: boolean;
    date: string;
    time: string;
    location: string;
  };
}) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
            {event.category}
          </span>
        </div>
        {event.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-white">
              Featured
            </span>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-primary" />
            <span>
              {new Date(event.date).toLocaleDateString("en-AU", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">
            Register
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EventsPage() {
  const featuredEvents = sampleEvents.filter((event) => event.featured);
  const upcomingEvents = sampleEvents.filter((event) => !event.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Events & Activities
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Join our vibrant community events, educational workshops, and
              meaningful activities. Connect with fellow community members and
              grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {eventCategories.map((category) => (
              <Button
                key={category}
                variant={category === "All Events" ? "primary" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don&rsquo;t miss these special upcoming events
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              More great events coming your way
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Hosting */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white text-center">
            <CardContent>
              <UsersIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-2xl font-bold mb-4">Host Your Own Event</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Have an idea for a community event? We&rsquo;d love to help you
                bring it to life. Whether it&rsquo;s an educational workshop,
                cultural celebration, or community service project.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Propose an Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              Stay Updated on Events
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive notifications about upcoming events and
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
