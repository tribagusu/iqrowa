import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // enable image optimization for remote images
    domains: ["images.unsplash.com", "plus.unsplash.com", "unsplash.com"],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  headers: async () => {
    return [
      {
        source: "/:all*(png|jpg|jpeg|gif|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
