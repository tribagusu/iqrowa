import { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { samplePrograms } from "@/data/sampleData";

export const metadata: Metadata = {
  title: "Programs - Our Services & Initiatives",
  description:
    "Explore IMA Australia programs across education, youth development, community services, and more.",
};

const categories = [
  "All",
  "Education",
  "Youth Development",
  "Women's Programs",
  "Community Service",
];

export default function ProgramsPage() {
  const featured = samplePrograms.filter((p) => p.featured);
  const others = samplePrograms.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Programs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive programs designed to serve and strengthen our
            community
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "All" ? "primary" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((program) => (
              <Card key={program.id} hover>
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-3">
                  {program.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">
                    {program.category}
                  </span>
                  <span className="text-gray-500">{program.department}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-6 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((program) => (
              <Card key={program.id} hover>
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-3">
                  {program.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">
                    {program.category}
                  </span>
                  <span className="text-gray-500">{program.department}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/departments">
              <Button variant="outline">Explore by Departments</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
