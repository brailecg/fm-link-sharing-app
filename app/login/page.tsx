"use server";
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

import React from "react";
import AppLogo from "@/components/AppLogo";
import FormSignup from "../components/FormSignUp";
import FormLogin from "../components/FormLogin";

export default async function Login() {
  // const signIn = async (formData: FormData) => {
  //   "use server";

  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/protected");
  // };

  // const signUp = async (formData: FormData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/login?message=Check email to continue sign in process");
  // };

  return (
    <div className="flex justify-center items-center  bg-main-grey-light w-dvw h-dvh p-8 sm:p-0">
      <div className="w-full h-full flex flex-col sm:w-[476px] sm:h-[573px]">
        <AppLogo className=" sm:self-center mb-16" />
        <div className="animate-in sm:p-10 sm:bg-white">
          <div className=" mb-10">
            <h1 className=" text-2xl font-bold text-main-grey-dark leading-[150%]">
              Login
            </h1>
            <h3 className=" text-main-grey leading-[150%]">
              Add your details below to get back into the app
            </h3>
          </div>
          <FormLogin />
          <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-2">
            <p className=" text-main-grey">Don't have an account?</p>
            <Link href="/signup" className=" text-main-purple">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
