"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SignUpInput from "./form/SignUpInput";
import { signUp } from "@/utils/supabase/sb_auth";
import Loader from "./Loader";

const FormSignup = ({ message }: { message: string }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setBtnDisabled(true);
    await signUp(data);
    setBtnDisabled(false);
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
        <SignUpInput
          register={register}
          type="email"
          name="email"
          label="Email Address"
          errorMessage={errors["email"]?.message?.toString()}
        />
        <SignUpInput
          register={register}
          type="password"
          name="password"
          label="Create Password"
          errorMessage={errors["password"]?.message?.toString()}
        />
        <SignUpInput
          register={register}
          type="password"
          name="confirm_password"
          label="Confirm Password"
          errorMessage={errors["confirm_password"]?.message?.toString()}
          watch={watch}
        />
        <p className="mb-6 text-main-grey text-xs">
          Password must contain at least 8 characters
        </p>
        <button
          type="submit"
          className=" w-full h-12 bg-main-purple text-white rounded-md px-2 hover:bg-main-purple-hover">
          Create new account
        </button>
      </form>
      {message && <p className="p-4 text-center  text-red-500 ">{message}</p>}
    </>
  );
};

export default FormSignup;
