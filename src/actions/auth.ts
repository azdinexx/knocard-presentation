"use server";

import { createSession } from "./session";
import { cookies } from "next/headers";

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

  const session = await createSession();
  cookies().set("knocard-session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600, // 1 hour
    path: "/",
  });

  return { success: true };
}
