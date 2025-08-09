import { Metadata } from "next";
import {
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Donate - Support Our Community",
  description:
    "Support the International Madani Association Australia and help us make a positive impact in our communities.",
};

const donationCauses = [
  {
    icon: AcademicCapIcon,
    title: "Education Programs",
    description:
      "Support our weekend Islamic school, Arabic classes, and educational workshops that serve over 300 children and adults.",
    impact: "$50 sponsors a child for one month",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HeartIcon,
    title: "Community Services",
    description:
      "Help us provide food assistance, emergency relief, and support services to families in need.",
    impact: "$100 feeds a family for one week",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HandRaisedIcon,
    title: "Youth Development",
    description:
      "Empower young Muslims through mentorship programs, leadership training, and community engagement activities.",
    impact: "$75 sponsors a youth for leadership program",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HomeIcon,
    title: "Facility Maintenance",
    description:
      "Help maintain and improve our community centers and prayer facilities for all community members.",
    impact: "$200 covers monthly utilities",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const impactStories = [
  {
    name: "Sarah's Story",
    story:
      "Thanks to our education program, my daughter has learned Arabic and memorized several chapters of the Quran. The teachers are amazing!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b401?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ahmed's Journey",
    story:
      "The youth mentorship program helped me develop leadership skills and connect with other young Muslims. Now I volunteer as a mentor too.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Fatima's Family",
    story:
      "During difficult times, IMA provided us with food assistance and emotional support. We are forever grateful for the community care.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

const donationAmounts = [25, 50, 100, 250, 500, 1000];

export default function DonationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 islamic-pattern">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Make a Difference
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              Your generosity helps us build stronger communities, provide
              essential services, and create positive change. Every donation, no
              matter the size, makes an impact.
            </p>
            <div className="mt-10">
              <Button
                size="xl"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Donate Now
                <HeartIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donation Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Make a Donation</CardTitle>
              <CardDescription>
                Choose an amount or enter a custom donation to support our
                community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="py-3 hover:bg-primary hover:text-white"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="custom-amount" className="sr-only">
                  Custom amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="custom-amount"
                    placeholder="Enter custom amount"
                    className="block w-full pl-7 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                  <option>One-time donation</option>
                  <option>Monthly donation</option>
                  <option>Quarterly donation</option>
                  <option>Annual donation</option>
                </select>
              </div>

              <Button size="lg" className="w-full">
                Proceed to Payment
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Secure payment processing. Your donation is tax-deductible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Where Your Donation Goes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Support specific causes that matter to you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {donationCauses.map((cause, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <cause.icon className="h-6 w-6 text-primary mr-2" />
                    <CardTitle>{cause.title}</CardTitle>
                  </div>
                  <CardDescription>{cause.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-primary">
                      Impact: {cause.impact}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Donate to This Cause
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stories of Impact
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how your donations are making a real difference
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {impactStories.map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    &ldquo;{story.story}&rdquo;
                  </blockquote>
                  <p className="font-medium text-gray-900">— {story.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Other Ways to Help
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              There are many ways to support our community beyond financial
              donations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent>
                <HandRaisedIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Donate your time and skills to help with events, programs, and
                  community services.
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <HeartIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Sponsor Events</h3>
                <p className="text-gray-600 mb-4">
                  Sponsor community events, workshops, or educational programs
                  to support specific initiatives.
                </p>
                <Button variant="outline">Explore Options</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <AcademicCapIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Legacy Giving</h3>
                <p className="text-gray-600 mb-4">
                  Create a lasting impact through planned giving and endowment
                  contributions.
                </p>
                <Button variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Large Donations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white text-center">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                Planning a Major Gift?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                For major donations, corporate sponsorships, or to discuss how
                you can make a significant impact, we&rsquo;d love to speak with
                you personally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Contact Our Team
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
