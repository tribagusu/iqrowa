import { notFound } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { departments, samplePrograms } from "@/data/sampleData";

export default function DepartmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dept = departments.find((d) => d.id === params.id);
  if (!dept) return notFound();

  const programs = samplePrograms.filter((p) => p.department === dept.name);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {dept.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{dept.description}</p>
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  Head: {dept.head}
                </span>
              </div>
            </div>
            <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden">
              <img
                src={dept.image}
                alt={dept.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Programs by {dept.name}
          </h2>
          {programs.length === 0 ? (
            <p className="text-gray-600">No programs listed yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <Card key={program.id} hover>
                  <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {program.title}
                  </h3>
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
          )}
          <div className="text-center mt-10">
            <a
              href="/departments"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              Back to Departments
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
