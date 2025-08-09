// Sample data for the IMA website

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  featured: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  department: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

export interface SocialMediaPost {
  id: string;
  platform: "facebook" | "instagram" | "twitter" | "youtube";
  content: string;
  image?: string;
  date: string;
  engagement: number;
}

// Sample news data
export const sampleNews: NewsItem[] = [
  {
    id: "1",
    title: "IMA Australia Launches New Community Outreach Program",
    excerpt:
      "A comprehensive initiative to support local families and strengthen community bonds across Australian cities.",
    content:
      "The International Madani Association Australia has officially launched its new Community Outreach Program...",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-15",
    category: "Community",
    author: "Dr. Ahmed Hassan",
  },
  {
    id: "2",
    title: "Annual Iftar Gathering Brings Together 500+ Community Members",
    excerpt:
      "A beautiful evening of unity and fellowship as the community comes together to break fast during Ramadan.",
    content:
      "IMA Australia hosted its largest Iftar gathering to date, welcoming over 500 community members...",
    image:
      "https://images.unsplash.com/photo-1577737169645-c2051e7d0c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-10",
    category: "Events",
    author: "Fatima Al-Zahra",
  },
  {
    id: "3",
    title: "Youth Leadership Summit 2024 Registration Now Open",
    excerpt:
      "Empowering the next generation of Muslim leaders through comprehensive training and development programs.",
    content:
      "Registration is now open for the highly anticipated Youth Leadership Summit 2024...",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-08",
    category: "Youth",
    author: "Mohammad Tariq",
  },
];

// Sample events data
export const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Weekly Friday Prayer Service",
    description:
      "Join us for our weekly congregational prayer service. All are welcome.",
    date: "2024-01-26",
    time: "1:00 PM - 2:00 PM",
    location: "IMA Centre, Sydney",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Religious",
    featured: true,
  },
  {
    id: "2",
    title: "Islamic History Workshop",
    description:
      "An educational workshop covering the golden age of Islamic civilization and its contributions to world knowledge.",
    date: "2024-02-03",
    time: "10:00 AM - 3:00 PM",
    location: "IMA Education Centre",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    featured: false,
  },
  {
    id: "3",
    title: "Community Cleanup Drive",
    description:
      "Join hands with fellow community members to keep our neighborhoods clean and beautiful.",
    date: "2024-02-10",
    time: "8:00 AM - 12:00 PM",
    location: "Centennial Park, Sydney",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Community Service",
    featured: true,
  },
  {
    id: "4",
    title: "Interfaith Dialogue Forum",
    description:
      "Building bridges between different faith communities through open dialogue and understanding.",
    date: "2024-02-17",
    time: "7:00 PM - 9:00 PM",
    location: "Community Hall, Melbourne",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Interfaith",
    featured: false,
  },
];

// Sample programs data
export const samplePrograms: Program[] = [
  {
    id: "1",
    title: "Weekend Islamic School",
    description:
      "Comprehensive Islamic education for children ages 5-16, covering Quran, Arabic, and Islamic studies.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    department: "Education Department",
    featured: true,
  },
  {
    id: "2",
    title: "Youth Mentorship Program",
    description:
      "Connecting young Muslims with experienced mentors for personal and professional development.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Youth Development",
    department: "Youth Department",
    featured: true,
  },
  {
    id: "3",
    title: "Women's Empowerment Circle",
    description:
      "Supporting Muslim women through skill development, networking, and community engagement opportunities.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Women's Programs",
    department: "Women's Department",
    featured: false,
  },
  {
    id: "4",
    title: "Community Food Bank",
    description:
      "Providing food assistance to families in need while fostering community solidarity.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Community Service",
    department: "Community Services",
    featured: true,
  },
];

// Sample blog posts data
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Importance of Community in Islamic Teachings",
    excerpt:
      "Exploring how Islamic principles emphasize the value of community bonds and mutual support.",
    content:
      "Islam places tremendous emphasis on the concept of community (Ummah)...",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-20",
    author: "Imam Abdullah Rahman",
    tags: ["Community", "Islamic Teachings", "Ummah"],
  },
  {
    id: "2",
    title: "Ramadan Reflections: Building Spiritual Resilience",
    excerpt:
      "How the holy month of Ramadan teaches us valuable lessons about self-discipline and spiritual growth.",
    content:
      "Ramadan is more than just fasting; it is a transformative experience...",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-18",
    author: "Dr. Aisha Mohammed",
    tags: ["Ramadan", "Spirituality", "Self-discipline"],
  },
  {
    id: "3",
    title: "Youth Voices: Making a Difference in Modern Australia",
    excerpt:
      "Young Australian Muslims share their experiences and aspirations for positive change in society.",
    content: "The voice of Muslim youth in Australia is strong and clear...",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-16",
    author: "Yasmin Ali",
    tags: ["Youth", "Australia", "Social Change"],
  },
];

// Sample social media posts
export const sampleSocialMedia: SocialMediaPost[] = [
  {
    id: "1",
    platform: "facebook",
    content:
      "🌟 Join us for our weekly Friday prayers! Every Friday at 1:00 PM. All welcome! 🤲 #JummahMubarak #Community",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-01-22",
    engagement: 145,
  },
  {
    id: "2",
    platform: "instagram",
    content:
      "✨ Beautiful moments from our community iftar gathering! Thank you to all who joined us. 🥛🍽️ #Iftar #Community #Blessed",
    image:
      "https://images.unsplash.com/photo-1577737169645-c2051e7d0c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-01-21",
    engagement: 89,
  },
  {
    id: "3",
    platform: "twitter",
    content:
      "📚 Registration is now open for our Youth Leadership Summit 2024! Empowering the next generation. Link in bio. #YouthLeadership #IMAustralia",
    date: "2024-01-20",
    engagement: 56,
  },
  {
    id: "4",
    platform: "youtube",
    content:
      '🎥 New video: "Understanding Islamic Values in Modern Society" - Watch our latest educational series featuring community scholars.',
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-01-19",
    engagement: 234,
  },
];

// Departments data
export const departments = [
  {
    id: "education",
    name: "Education Department",
    description:
      "Providing quality Islamic education and academic support for all ages.",
    head: "Dr. Ahmed Hassan",
    programs: [
      "Weekend Islamic School",
      "Arabic Language Classes",
      "Adult Education Program",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "youth",
    name: "Youth Department",
    description:
      "Empowering young Muslims through leadership development and community engagement.",
    head: "Mohammad Tariq",
    programs: ["Youth Mentorship Program", "Leadership Summit", "Sports Club"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "women",
    name: "Women's Department",
    description:
      "Supporting and empowering Muslim women through various programs and initiatives.",
    head: "Dr. Aisha Mohammed",
    programs: [
      "Women's Empowerment Circle",
      "Professional Development Workshop",
      "Health & Wellness Program",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "community",
    name: "Community Services",
    description:
      "Serving the broader community through charitable work and social services.",
    head: "Fatima Al-Zahra",
    programs: [
      "Community Food Bank",
      "Homeless Shelter Support",
      "Emergency Relief Fund",
    ],
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
