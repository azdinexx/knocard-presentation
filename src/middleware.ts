import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const session = cookieStore.get("knocard-session");

  // Check if the request is for a static asset or API route
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/password") {
    if (session) {
      try {
        await jwtVerify(
          session.value,
          new TextEncoder().encode(process.env.JWT_SECRET)
        );
        // If verification succeeds, redirect to home
        return NextResponse.redirect(new URL("/", request.url));
      } catch {
        // If verification fails, continue to password page
        return NextResponse.next();
      }
    }
    // If no session, continue to password page
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL("/password", request.url));
  }

  try {
    await jwtVerify(
      session.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/password", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
