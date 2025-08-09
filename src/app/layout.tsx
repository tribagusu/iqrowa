import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "International Madani Association (IMA) Australia",
    template: "%s | IMA Australia",
  },
  description:
    "Building bridges, fostering understanding, and creating positive change in our communities through Islamic values, education, and service to humanity.",
  keywords: [
    "Islamic organization",
    "Australia",
    "Madani",
    "community",
    "education",
    "youth programs",
    "charity",
    "interfaith dialogue",
  ],
  authors: [{ name: "International Madani Association" }],
  creator: "International Madani Association",
  publisher: "International Madani Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ima-australia.org"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://ima-australia.org",
    title: "International Madani Association (IMA) Australia",
    description:
      "Building bridges, fostering understanding, and creating positive change in our communities through Islamic values, education, and service to humanity.",
    siteName: "IMA Australia",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Madani Association (IMA) Australia",
    description:
      "Building bridges, fostering understanding, and creating positive change in our communities through Islamic values, education, and service to humanity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* Clear fixed header height consistently */}
          <main className="flex-1 pt-header">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
