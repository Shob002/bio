import "../styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

import Providers from "./providers";
import Navbar from "./_components/Navbar";

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

        <Providers>

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN */}
          <main className="w-full min-h-screen">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="mt-24 border-t">

            <div className="grid w-full gap-6 px-6 py-10 text-sm md:grid-cols-3">

              {/* BRAND */}
              <div>
                <h3 className="font-semibold">Bioorgo</h3>
                <p className="mt-2 text-gray-600">
                  Precision pest control powered by biology.
                </p>
              </div>

              {/* COMPANY */}
              <div>
                <h4 className="font-medium">Company</h4>
                <div className="mt-2 flex flex-col gap-1">
                  <a href="/about">About</a>
                  <a href="/services">Solutions</a>
                  <a href="/contact">Contact</a>

                  {/* ✅ ADMIN (NATURAL LINK) */}
                  <a href="/admin/login">Admin</a>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="font-medium">Contact</h4>
                <p className="mt-2">Karnataka, India</p>
                <p>vijeth.arya@bioorgo.com</p>
                <p>+91 9980908084</p>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t py-4 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Bioorgo
            </div>

          </footer>

        </Providers>

      </body>
    </html>
  );
}