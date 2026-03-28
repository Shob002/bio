import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

import { TRPCReactProvider } from "~/trpc/react";

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

        <TRPCReactProvider>

          {/* NAVBAR */}
          <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
              
              <Link href="/" className="font-semibold text-lg tracking-tight">
                Bioorgo
              </Link>

              <nav className="flex items-center gap-6 text-sm text-gray-600">
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>

                <Link href="/services" className="hover:text-black transition">
                  Solutions
                </Link>

                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>

                <Link
                  href="/contact"
                  className="ml-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Get Started
                </Link>
              </nav>

            </div>
          </header>

          {/* CONTENT */}
          <main className="max-w-6xl mx-auto px-6 py-16">
            {children}
          </main>

          {/* FOOTER (UPGRADED) */}
          <footer className="relative border-t mt-24 overflow-hidden">

            {/* GLOW */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-150 h-150 bg-green-200 blur-3xl opacity-20 rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm">

              {/* BRAND */}
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Bioorgo
                </h3>
                <p className="mt-3 text-gray-600 max-w-xs">
                  Precision pest control powered by biology.
                </p>
              </div>

              {/* LINKS */}
              <div>
                <h4 className="font-medium text-gray-900">Company</h4>
                <div className="mt-4 flex flex-col gap-2 text-gray-600">
                  <Link href="/about" className="hover:text-black transition">About</Link>
                  <Link href="/services" className="hover:text-black transition">Solutions</Link>
                  <Link href="/contact" className="hover:text-black transition">Contact</Link>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="font-medium text-gray-900">Contact</h4>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>📍 Karnataka, India</p>
                  <p>📧 vijeth.arya@bioorgo.com</p>
                  <p>📞 +91 9980908084</p>
                </div>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t text-center text-xs text-gray-500 py-6">
              © {new Date().getFullYear()} Bioorgo. All rights reserved.
            </div>

          </footer>

        </TRPCReactProvider>

      </body>
    </html>
  );
}