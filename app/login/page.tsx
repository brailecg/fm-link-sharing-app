"use server";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import AppLogo from "@/components/AppLogo";
import FormLogin from "../components/FormLogin";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/protected/link");
  }
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
          <FormLogin message={searchParams?.message} />
        </div>
      </div>
    </div>
  );
}
