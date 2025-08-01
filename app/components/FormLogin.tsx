"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import LoginInput from "./form/LoginInput";
import { login } from "@/utils/supabase/sb_auth";
import {
  continueAnonymously,
  continueWithGoogle,
} from "@/utils/supabase/sb_auth";
import Loader from "./Loader";

const FormLogin = ({ message }: { message: string }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setBtnDisabled(true);
    await login(data);
    setBtnDisabled(false);
  };

  const handleSocialLogin = (provider: string) => {
    setBtnDisabled(true);
    if (provider === "google") {
      continueWithGoogle();
    } else if (provider === "anonymous") {
      continueAnonymously();
    }
  };
  return (
    <>
      {btnDisabled && (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          register={register}
          type="email"
          name="email"
          label="Email Address"
          errorMessage={errors["email"]?.message?.toString()}
        />
        <LoginInput
          register={register}
          type="password"
          name="password"
          label="Enter Password"
          errorMessage={errors["password"]?.message?.toString()}
        />

        <button
          disabled={btnDisabled}
          type="submit"
          className={`${
            btnDisabled ? " opacity-50" : ""
          } w-full h-12 bg-main-purple text-white rounded-md px-2 hover:bg-main-purple-hover`}>
          Login
        </button>

        {message && <p className="p-4 text-center  text-red-500 ">{message}</p>}
      </form>
      <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-2 mt-6">
        <p className=" text-main-grey">Don't have an account?</p>
        <Link href="/signup" className=" text-main-purple">
          Create Account
        </Link>
      </div>
      <div className="flex my-6 w-full items-center">
        <div className="border flex-1"></div>
        <div className="flex-none text-sm px-2 text-main-grey italic">or</div>
        <div className="border flex-1"></div>
      </div>
      <div className=" space-y-2">
        <button
          onClick={() => handleSocialLogin("google")}
          className={`${
            btnDisabled ? " opacity-50" : ""
          } flex items-center justify-center gap-3 border rounded-md p-2 bg-white w-full h-12`}>
          <Image
            width={24}
            height={24}
            alt="Google Icon"
            src={"assets/supabase-logo-icon.png"}
          />
          <span className=" text-black/50 font-semibold">
            Continue With Google
          </span>
        </button>

        <button
          onClick={() => handleSocialLogin("anonymous")}
          className="flex items-center justify-center gap-3 border rounded-md p-2 bg-white w-full h-12">
          <Image
            width={24}
            height={24}
            alt="Supabase Icon"
            src={"assets/supabase-logo-icon.png"}
          />
          <span className=" text-black/50 font-semibold">
            Continue Anonymously
          </span>
        </button>
        <div className=" italic text-xs mt-1 text-main-grey-hover text-center">
          Anonynous users will be deleted at the end of each day.
        </div>
      </div>
    </>
  );
};

export default FormLogin;
