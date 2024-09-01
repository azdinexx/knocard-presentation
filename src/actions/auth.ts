"use server";

import { createSession } from "./session";
import { redirect } from "next/navigation";

type SignInFormState = null | {
  error: string;
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

  await createSession();

  redirect(`/`);
}
