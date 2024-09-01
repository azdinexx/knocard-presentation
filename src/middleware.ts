import { NextRequest, NextResponse } from "next/server";
import { isSignedIn } from "./actions/auth";

export default async function middleware(request: NextRequest) {
  await isSignedIn(request.url);
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
