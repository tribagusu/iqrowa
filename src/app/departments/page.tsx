import Link from "next/link";
import Card from "@/components/ui/Card";
import { departments } from "@/data/sampleData";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Departments
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Each department runs programs and activities serving our community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <Link key={dept.id} href={`/departments/${dept.id}`}>
                <Card hover className="text-center">
                  <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{dept.name}</h3>
                  <p className="text-gray-600 line-clamp-3">
                    {dept.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
