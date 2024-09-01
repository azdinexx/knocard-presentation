"use server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { v4 as uuidv4 } from "uuid";

export async function getSession() {
  const cookieStore = cookies();
  const session = cookieStore.get("knocard-session");
  return session;
}

export async function createSession() {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const session = await new SignJWT({
    id: uuidv4(),
    createdAt: Date.now(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  cookies().set("knocard-session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600, // 1 hour
  });

  return session;
}
