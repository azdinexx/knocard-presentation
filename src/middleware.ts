import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/actions/auth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/password")) {
    const session = request.cookies.get("knocard-session");
    if (session) {
      const isValidSession = await verifySession(session.value);
      if (isValidSession) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
    return NextResponse.next();
  }

  const session = request.cookies.get("knocard-session");

  if (!session) {
    return NextResponse.redirect(new URL("/password", request.url));
  }

  const isValidSession = await verifySession(session.value);

  if (!isValidSession) {
    const response = NextResponse.redirect(new URL("/password", request.url));
    response.cookies.delete("knocard-session");
    return response;
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
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
