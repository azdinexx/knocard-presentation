import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const knocardCardSession = request.cookies.get("knocard-card");

  if (!knocardCardSession) {
    return NextResponse.redirect(new URL("/password", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - password (password page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|password).*)",
  ],
};
