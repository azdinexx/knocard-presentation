"use server";

import { jwtVerify } from "jose";
import { createSession, getSession } from "./session";
import { redirect } from "next/navigation";

type SignInFormState = null | {
  error: string;
};

export async function signIn(state: SignInFormState, formData: FormData) {
  const password = formData.get("password") as string;
  if (!password) {
    return { error: "password is required" };
  }
  console.log(process.env.PASSWORD);

  const isPasswordCorrect = password === process.env.PASSWORD;

  if (!isPasswordCorrect) {
    return { error: "password is incorrect" };
  }

  await createSession();

  redirect(`/`);
}

export async function isSignedIn(pathname: string) {
  const session = await getSession();
  if (!session) {
    if (pathname !== "/password") {
      redirect("/password");
    }
    console.log("no session");
    redirect("/password");
  }
  const isSignedIn = await jwtVerify(
    session?.value,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  if (!isSignedIn) {
    redirect("/password");
  }
  return true;
}
