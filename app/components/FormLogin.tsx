"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import LoginInput from "./form/LoginInput";
const FormLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log({ data });
  return (
    <form className=" mb-6" onSubmit={handleSubmit(onSubmit)}>
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
        type="submit"
        className=" w-full h-12 bg-main-purple text-white rounded-md px-2">
        Login
      </button>
    </form>
  );
};

export default FormLogin;
