"use server";
import Link from "next/link";
import Image from "next/image";

import React from "react";
import AppLogo from "@/components/AppLogo";
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
          <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-2 mt-6">
            <p className=" text-main-grey">Don't have an account?</p>
            <Link href="/signup" className=" text-main-purple">
              Create Account
            </Link>
          </div>
          <div className="flex my-6 w-full items-center">
            <div className="border flex-1"></div>
            <div className="flex-none text-sm px-2 text-main-grey italic">
              or
            </div>
            <div className="border flex-1"></div>
          </div>
          <div className=" space-y-2">
            <form>
              <button className="flex items-center justify-center gap-3 border rounded-md p-2 bg-white w-full h-12">
                <Image
                  width={24}
                  height={24}
                  alt="Google Icon"
                  src={
                    "https://fdksslojrpadbebswbsg.supabase.co/storage/v1/object/public/icons/icon-google.png?t=2024-05-28T02%3A26%3A18.354Z"
                  }
                />
                <span className=" text-black/50 font-semibold">
                  Continue With Google
                </span>
              </button>
            </form>
            <form>
              <button className="flex items-center justify-center gap-3 border rounded-md p-2 bg-white w-full h-12">
                <Image
                  width={24}
                  height={24}
                  alt="Supabase Icon"
                  src={
                    "https://fdksslojrpadbebswbsg.supabase.co/storage/v1/object/public/icons/supabase-logo-icon.png?t=2024-06-01T03%3A18%3A03.958Z"
                  }
                />
                <span className=" text-black/50 font-semibold">
                  Continue Anonymously
                </span>
              </button>
              <div className=" italic text-xs mt-1 text-main-grey-hover text-center">
                Anonynous users will be deleted at the end of each day.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
