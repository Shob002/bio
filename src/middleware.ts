import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// ✅ Define token type
type Token = {
  role?: string;
};

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req })) as Token | null;

  const { pathname } = req.nextUrl;

  // 🔐 Protect admin routes
  if (pathname.startsWith("/admin")) {
    // Not logged in
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Optional: role check
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// ✅ Apply only to admin routes
export const config = {
  matcher: ["/admin/:path*"],
};