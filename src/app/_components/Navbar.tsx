"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  const role = (session?.user as any)?.role;

  const isAdmin = status === "authenticated" && role === "ADMIN";

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="w-full flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="font-semibold text-lg">
          Bioorgo
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm text-gray-600">

          <Link href="/about">About</Link>
          <Link href="/services">Solutions</Link>
          <Link href="/contact">Contact</Link>

          {/* ADMIN ONLY */}
          {isAdmin && (
            <Link href="/admin" className="text-red-600 font-semibold">
              Admin
            </Link>
          )}

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-black text-white rounded-lg"
          >
            Get Started
          </Link>

        </nav>

      </div>
    </header>
  );
}