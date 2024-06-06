import React from "react";

import { SubmitButton } from "../components/form/SubmitButton";
import AppLogo from "@/components/AppLogo";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";
import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex justify-center items-center  bg-main-grey-light w-dvw h-dvh p-8 sm:p-0">
      <div className="w-full h-full flex flex-col sm:w-[476px] sm:h-[573px]">
        <AppLogo className=" sm:self-center mb-16" />
        <div className="animate-in sm:p-10 sm:bg-white">
          <div className=" mb-10">
            <h1 className=" text-2xl font-bold text-main-grey-dark leading-[150%]">
              Create account
            </h1>
            <h3 className=" text-main-grey leading-[150%]">
              Let's get your started sharing your links!
            </h3>
          </div>
          <form className=" mb-6">
            <EmailInput name="email" label="Email Address" />
            <PasswordInput name="password" label="Create Password" />
            <PasswordInput name="confirm_password" label="Confirm Password" />
            <SubmitButton
              className=" w-full h-12 bg-main-purple text-white rounded-md px-2"
              pendingText="Signing Up...">
              Create new account
            </SubmitButton>
          </form>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-2">
            <p className=" text-main-grey">Already have an account?</p>
            <Link href="/login" className=" text-main-purple">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
