import Card from "@/components/ui/Card";
import Image from "next/image";

const galleryItems: { id: string; src: string; alt: string }[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1577737169645-c2051e7d0c7b?auto=format&fit=crop&w=1200&q=80",
    alt: "Community Iftar",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Friday Prayer",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Youth Mentorship",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Education Program",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    alt: "Food Bank",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Interfaith Dialogue",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Moments from our programs and community life
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <Card key={item.id} hover className="overflow-hidden p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{item.alt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
