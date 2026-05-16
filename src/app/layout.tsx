import "../styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

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
      <body className="bg-[#06100b] text-[#f5f1e8] antialiased">
        <Providers>
          <Navbar />

          <main className="w-full min-h-screen">{children}</main>

          <footer className="border-t border-white/10 bg-[#06100b] px-6">
            <div className="mx-auto grid max-w-7xl gap-10 py-12 text-sm md:grid-cols-3">
              <div>
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  Bioorgo
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-[#c9d6c6]">
                  Precision pest control powered by biology, pheromones,
                  kairomones and chemical ecology.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#b7ef75]">
                  Company
                </h4>

                <div className="mt-4 flex flex-col gap-3 text-[#c9d6c6]">
                  <Link href="/about" className="hover:text-[#b7ef75]">
                    About
                  </Link>
                  <Link href="/services" className="hover:text-[#b7ef75]">
                    Solutions
                  </Link>
                  <Link href="/contact" className="hover:text-[#b7ef75]">
                    Contact
                  </Link>
                  <Link href="/admin/login" className="hover:text-[#b7ef75]">
                    Admin
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#b7ef75]">
                  Contact
                </h4>

                <div className="mt-4 space-y-2 text-[#c9d6c6]">
                  <p>Karnataka, India</p>
                  <p>vijeth.arya@bioorgo.com</p>
                  <p>+91 9980908084</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 py-5 text-center text-xs text-[#93a18e]">
              © {new Date().getFullYear()} Bioorgo. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}