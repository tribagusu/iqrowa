import { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { sampleNews } from "@/data/sampleData";

export const metadata: Metadata = {
  title: "News - Community Updates",
  description: "Read the latest news and announcements from IMA Australia.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Latest updates, announcements, and stories
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sampleNews.map((item) => (
              <Card key={item.id} hover className="overflow-hidden">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{new Date(item.date).toLocaleDateString("en-AU")}</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
