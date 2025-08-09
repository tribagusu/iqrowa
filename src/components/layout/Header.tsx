"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// Desktop dropdown groups
const navGroups: (
  | { type: "link"; name: string; href: string }
  | { type: "group"; name: string; items: { name: string; href: string }[] }
)[] = [
  { type: "link", name: "Home", href: "/" },
  {
    type: "group",
    name: "About",
    items: [
      { name: "About IMA", href: "/about" },
      { name: "Organization Structure", href: "/about/structure" },
    ],
  },
  {
    type: "group",
    name: "Programs",
    items: [
      { name: "All Programs", href: "/programs" },
      { name: "Departments", href: "/departments" },
      { name: "Events", href: "/events" },
    ],
  },
  {
    type: "group",
    name: "Media",
    items: [
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
];

function ClientPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children as React.ReactNode, document.body);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = original;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo (icon only) */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">International Madani Association</span>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">
                  IMA
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div
          className="relative hidden lg:flex lg:gap-x-6"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {navGroups.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <button className="inline-flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors duration-200">
                  {item.name}
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg p-2"
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/donation"
            className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </nav>

      {/* Mobile menu in portal (full-screen) */}
      <ClientPortal>
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">
                      International Madani Association
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm font-serif">
                          IMA
                        </span>
                      </div>
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <Link
                    href="/"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500">
                      About
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/about"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About IMA
                      </Link>
                      <Link
                        href="/about/structure"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Organization Structure
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500">
                      Programs
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/programs"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Programs
                      </Link>
                      <Link
                        href="/departments"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Departments
                      </Link>
                      <Link
                        href="/events"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Events
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500">
                      Media
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/blog"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/news"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        News
                      </Link>
                      <Link
                        href="/gallery"
                        className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Gallery
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/donation"
                      className="block rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </ClientPortal>
    </header>
  );
}
