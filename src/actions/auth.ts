"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

type SignInFormState = null | {
  error?: string;
  success?: boolean;
};

export async function signIn(state: SignInFormState, formData: FormData) {
  const password = formData.get("pwd") as string;
  const remember = formData.get("remember");
  console.log("password : ", password);
  console.log("remember : ", remember);
  console.log("process.env.PASSWORD : ", process.env.PASSWORD);
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
    .setExpirationTime(remember ? "1d" : "1h")
    .sign(secret);

  cookies().set("knocard-session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: remember ? 86400 : 3600,
  });

  return { success: true };
}

export async function isLoggedIn() {
  const session = cookies().get("knocard-session");

  if (!session) {
    return false;
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jwtVerify(session.value, secret);
    return true;
  } catch (error) {
    return false;
  }
}

export async function verifySession(session: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  if (!session) {
    return false;
  }
  try {
    const { payload } = await jwtVerify(session, secret);
    return true;
  } catch (error) {
    return false;
  }
}
