import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  about: [
    { name: "Our Mission", href: "/about#mission" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "History", href: "/about#history" },
    { name: "Annual Reports", href: "/about#reports" },
  ],
  programs: [
    { name: "Education", href: "/programs#education" },
    { name: "Youth Programs", href: "/programs#youth" },
    { name: "Community Services", href: "/programs#community" },
    { name: "Interfaith Dialogue", href: "/programs#interfaith" },
  ],
  departments: [
    { name: "Education Department", href: "/departments/education" },
    { name: "Youth Department", href: "/departments/youth" },
    { name: "Women's Department", href: "/departments/women" },
    { name: "Community Services", href: "/departments/community" },
  ],
  connect: [
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ],
};

type IconProps = React.SVGProps<SVGSVGElement>;

const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.746-1.218c.35.433.886.699 1.459.699.638 0 1.18-.31 1.529-.783l1.658 1.308c-.75.949-1.89 1.527-3.187 1.527zm7.138 0c-1.297 0-2.437-.578-3.187-1.527l1.658-1.308c.349.473.891.783 1.529.783.573 0 1.109-.266 1.459-.699l1.746 1.218c-.757.937-1.908 1.533-3.205 1.533z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: IconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">
                  IMA
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  International Madani Association
                </h3>
                <p className="text-gray-300">Australia</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Building bridges, fostering understanding, and creating positive
              change in our communities through Islamic values, education, and
              service to humanity.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Islamic Centre Drive</p>
                  <p className="text-gray-300">Sydney, NSW 2000, Australia</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">+61 2 1234 5678</p>
              </div>

              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">info@ima-australia.org</p>
              </div>

              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Office Hours:</p>
                  <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  About IMA
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Programs
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Departments
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.departments.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Connect
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter subscription */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold leading-6 text-white">
                Stay Connected
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Subscribe to our newsletter for updates on events, programs, and
                community news.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex lg:max-w-md lg:flex-1 lg:justify-end">
              <form className="sm:flex sm:max-w-md lg:max-w-xs">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-primary sm:w-56 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Contact
              </Link>
            </div>
            <p className="mt-8 text-center text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 International Madani Association (IMA) Australia. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
