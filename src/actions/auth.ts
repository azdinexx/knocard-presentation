"use server";

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

type SignInFormState = null | {
  error?: string;
  success?: boolean;
};

export async function signIn(state: SignInFormState, formData: FormData) {
  const password = formData.get("password") as string;
  if (!password) {
    return { error: "password is required" };
  }

  const isPasswordCorrect = password === process.env.PASSWORD;

  if (!isPasswordCorrect) {
    return { error: "password is incorrect" };
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const session = await new SignJWT({
    id: uuidv4(),
    createdAt: Date.now(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);

  cookies().set("knocard-session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600 * 24 * 30, // 30 days
  });

  return { success: true };
}
