import Card from "@/components/ui/Card";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

type Socials = {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
};

interface Person {
  role: string;
  name: string;
  photo: string;
  bio: string;
  socials: Socials;
}

const structure: Person[] = [
  {
    role: "President",
    name: "Dr. Ahmed Hassan",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "Community leader with over 20 years experience in education and public service, focusing on interfaith cooperation and social cohesion across Australia.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ahmed-hassan-ima",
      facebook: "https://facebook.com/ahmed.hassan.ima",
      instagram: "https://instagram.com/dr.ahmed.hassan",
      x: "https://x.com/ahmedhassan_ima",
    },
  },
  {
    role: "Vice President",
    name: "Dr. Aisha Mohammed",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b401?auto=format&fit=crop&w=300&q=80",
    bio: "Educator and advocate leading programs that empower women and families through education, health, and community development.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aisha-mohammed-ima",
      facebook: "https://facebook.com/aisha.mohammed.ima",
      instagram: "https://instagram.com/dr.aisha.mohammed",
      x: "https://x.com/aisham_ima",
    },
  },
  {
    role: "Youth Director",
    name: "Mohammad Tariq",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    bio: "Passionate youth mentor building leadership pathways, sports initiatives, and volunteering opportunities for young Muslims.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammad-tariq-ima",
      facebook: "https://facebook.com/mohammad.tariq.ima",
      instagram: "https://instagram.com/tariq.youth",
      x: "https://x.com/tariq_ima",
    },
  },
  {
    role: "Community Services Director",
    name: "Fatima Al-Zahra",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    bio: "Leads charitable initiatives including the food bank, housing support, and emergency response for families in need.",
    socials: {
      linkedin: "https://www.linkedin.com/in/fatima-alzahra-ima",
      facebook: "https://facebook.com/fatima.alzahra.ima",
      instagram: "https://instagram.com/fatima.community",
      x: "https://x.com/fatima_ima",
    },
  },
  {
    role: "Education Director",
    name: "Imam Abdullah Rahman",
    photo:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&w=300&q=80",
    bio: "Oversees curriculum for Weekend Islamic School, Arabic classes, and adult learning with a focus on classical and contemporary scholarship.",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdullah-rahman-ima",
      facebook: "https://facebook.com/imam.abdullah.ima",
      instagram: "https://instagram.com/imam.abdullah",
      x: "https://x.com/abdullah_ima",
    },
  },
  {
    role: "Finance & Operations",
    name: "Yasmin Ali",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    bio: "Manages organizational finance, governance, and partnerships to ensure sustainable growth and transparent operations.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yasmin-ali-ima",
      facebook: "https://facebook.com/yasmin.ali.ima",
      instagram: "https://instagram.com/yasmin.ops",
      x: "https://x.com/yasmin_ima",
    },
  },
];

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-emerald-600 transition"
    >
      {children}
    </a>
  );
}

export default function OrganizationStructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Organization Structure
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Meet the leadership and management team of IMA Australia
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {structure.map((person) => (
              <Card key={person.name} className="text-center">
                <div className="flex flex-col items-center p-2">
                  <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-emerald-100 mb-4">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-emerald-700 text-sm font-medium">
                    {person.role}
                  </p>
                  <p className="text-gray-600 mt-3 text-sm line-clamp-4">
                    {person.bio}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    {person.socials.linkedin && (
                      <SocialButton
                        href={person.socials.linkedin}
                        label={`${person.name} LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </SocialButton>
                    )}
                    {person.socials.facebook && (
                      <SocialButton
                        href={person.socials.facebook}
                        label={`${person.name} Facebook`}
                      >
                        <Facebook size={16} />
                      </SocialButton>
                    )}
                    {person.socials.instagram && (
                      <SocialButton
                        href={person.socials.instagram}
                        label={`${person.name} Instagram`}
                      >
                        <Instagram size={16} />
                      </SocialButton>
                    )}
                    {person.socials.x && (
                      <SocialButton
                        href={person.socials.x}
                        label={`${person.name} X`}
                      >
                        <Twitter size={16} />
                      </SocialButton>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
