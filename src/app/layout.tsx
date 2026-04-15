import "../styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Bioorgo",
  description: "Precision Pest Control for Sustainable Agriculture",
};

const font = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-white text-gray-900 antialiased">

        {/* GLOBAL PROVIDERS (AUTH + TRPC) */}
        <Providers>

          {/* NAVBAR */}
          <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
            <div className="w-full flex items-center justify-between px-6 py-4">

              <Link href="/" className="font-semibold text-lg">
                Bioorgo
              </Link>

              <nav className="flex items-center gap-6 text-sm text-gray-600">

                <Link href="/about">About</Link>
                <Link href="/services">Solutions</Link>
                <Link href="/contact">Contact</Link>

                {/* ADMIN LINK */}
                <Link
                  href="/admin"
                  className="text-red-600 font-semibold"
                >
                  Admin
                </Link>

                <Link
                  href="/contact"
                  className="ml-2 px-4 py-2 bg-black text-white rounded-lg"
                >
                  Get Started
                </Link>

              </nav>

            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="w-full min-h-screen">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t mt-24">
            <div className="w-full px-6 py-10 grid md:grid-cols-3 gap-6 text-sm">

              <div>
                <h3 className="font-semibold">Bioorgo</h3>
                <p className="text-gray-600 mt-2">
                  Precision pest control powered by biology.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Company</h4>
                <div className="mt-2 flex flex-col gap-1">
                  <Link href="/about">About</Link>
                  <Link href="/services">Solutions</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div>
                <h4 className="font-medium">Contact</h4>
                <p className="mt-2">Karnataka, India</p>
                <p>vijeth.arya@bioorgo.com</p>
                <p>+91 9980908084</p>
              </div>

            </div>

            <div className="text-center text-xs text-gray-500 py-4 border-t">
              © {new Date().getFullYear()} Bioorgo
            </div>
          </footer>

        </Providers>

      </body>
    </html>
  );
}