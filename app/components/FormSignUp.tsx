"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SignUpInput from "./form/SignUpInput";

const FormSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log({ data });
  return (
    <form className=" mb-6" onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default FormSignup;
