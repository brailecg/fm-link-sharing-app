"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "./server";
import { FieldValues } from "react-hook-form";

const getURL = () => {
  const siteURL = process?.env?.NEXT_PUBLIC_SITE_URL;
  const vercelURL = process?.env?.NEXT_PUBLIC_VERCEL_URL;
  let url = siteURL ?? vercelURL ?? "http://localhost:3000/";
  return url;
};

export async function signUp(formData: FieldValues) {
  const origin = headers().get("origin");
  const email = formData?.email as string;
  const password = formData?.password as string;
  const supabase = createClient();

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    const errorMessage = error?.code
      ? error.code.replaceAll("_", " ")
      : "Could not authenticate user";
    return redirect("/signup?message=" + errorMessage);
  }

  return redirect("/protected/link");
}

export async function login(formData: FieldValues) {
  const email = formData?.email as string;
  const password = formData?.password as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/protected/link");
}

export async function continueWithGoogle() {
  const supabase = createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getURL() + "/auth/callback",
    },
  });

  if (error) {
    console.error("OAuth sign-in error:", error); // Log any errors
  } else {
    redirect(data.url);
  }
}

export async function continueAnonymously() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) {
    console.error("Anonymous sign-in error:", error); // Log any errors
  } else {
    redirect("/protected/link");
  }
}
