import { Metadata } from "next";
import Image from "next/image";
import {
  HeartIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  UsersIcon,
  LightBulbIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import Card, { CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision",
  description:
    "Learn about the International Madani Association Australia - our mission, values, history, and the people who make our community strong.",
};

// Values data
const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    description:
      "We serve with love and kindness, treating every individual with dignity and respect.",
  },
  {
    icon: GlobeAltIcon,
    title: "Unity",
    description:
      "Building bridges across diverse communities and fostering understanding between all people.",
  },
  {
    icon: AcademicCapIcon,
    title: "Education",
    description:
      "Committed to lifelong learning and sharing knowledge for the betterment of society.",
  },
  {
    icon: UsersIcon,
    title: "Community",
    description:
      "Strengthening bonds within our community and creating a supportive environment for all.",
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description:
      "Embracing modern approaches while staying true to our Islamic values and principles.",
  },
  {
    icon: HandRaisedIcon,
    title: "Service",
    description:
      "Dedicated to serving humanity and making a positive impact in our local and global communities.",
  },
];

// Leadership data
const leadership = [
  {
    name: "Dr. Ahmed Hassan",
    position: "President & Founder",
    bio: "With over 20 years of community leadership experience, Dr. Hassan founded IMA to create lasting positive change in Australian Muslim communities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    department: "Leadership",
  },
  {
    name: "Dr. Aisha Mohammed",
    position: "Vice President",
    bio: "A respected educator and community advocate, Dr. Mohammed leads our educational initiatives and women's empowerment programs.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b401?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    department: "Education",
  },
  {
    name: "Mohammad Tariq",
    position: "Youth Director",
    bio: "A passionate youth advocate with expertise in leadership development and community engagement programs.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    department: "Youth",
  },
  {
    name: "Fatima Al-Zahra",
    position: "Community Services Director",
    bio: "Leading our charitable initiatives and community outreach programs with dedication and compassion.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    department: "Community Services",
  },
];

// Statistics data
const stats = [
  { label: "Years of Service", value: "15+" },
  { label: "Community Members", value: "2,500+" },
  { label: "Programs Delivered", value: "50+" },
  { label: "Families Helped", value: "800+" },
  { label: "Volunteers", value: "200+" },
  { label: "Partner Organizations", value: "25+" },
];

// Timeline data
const timeline = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "IMA was established by a group of dedicated community members in Sydney with a vision to serve the Australian Muslim community.",
  },
  {
    year: "2012",
    title: "First Educational Program",
    description:
      "Launched our Weekend Islamic School, providing quality Islamic education to children in the community.",
  },
  {
    year: "2015",
    title: "Youth Department",
    description:
      "Established dedicated youth programs focusing on leadership development and community engagement.",
  },
  {
    year: "2018",
    title: "Community Expansion",
    description:
      "Opened additional centers in Melbourne and Brisbane, expanding our reach across Australia.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Adapted to virtual programming during COVID-19, reaching even more community members online.",
  },
  {
    year: "2024",
    title: "New Horizons",
    description:
      "Launched comprehensive community services and expanded interfaith dialogue initiatives.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 islamic-pattern">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About IMA Australia
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              Building bridges, fostering understanding, and creating positive
              change in our communities through Islamic values, education, and
              service to humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To serve the Australian Muslim community and broader society
                  by providing educational, spiritual, and social programs that
                  promote Islamic values, foster community unity, and contribute
                  to the common good of all Australians.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-4">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be a leading Islamic organization that inspires positive
                  change, builds interfaith understanding, and creates a
                  thriving community where Islamic values flourish alongside
                  Australian multiculturalism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Numbers that reflect our commitment to community service
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the dedicated leaders guiding our community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, index) => (
              <Card key={index} hover className="text-center">
                <CardContent>
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {leader.position}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-4">
                    {leader.bio}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {leader.department}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A timeline of growth and service to the community
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-0.5 bg-primary/20 transform md:-translate-x-px"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform md:-translate-x-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    <Card hover>
                      <CardContent>
                        <div className="text-primary font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Be part of our mission to build bridges, foster understanding, and
              create positive change in our communities. Together, we can make a
              difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Become a Member
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
