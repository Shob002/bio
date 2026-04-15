import { auth } from "~/server/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isLoginPage = nextUrl.pathname.startsWith("/admin/login");

  const user = req.auth?.user as any;

  // 🚨 allow login page always
  if (isLoginPage) {
    return NextResponse.next();
  }

  // 🚫 not logged in → redirect only admin pages
  if (isAdminRoute && !req.auth) {
    return NextResponse.redirect(
      new URL("/admin/login", nextUrl)
    );
  }

  // 🚫 logged in but not admin
  if (isAdminRoute && user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};