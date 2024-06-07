import React from "react";
import Image from "next/image";
import emailLogo from "../../../public/assets/email-icon.png";
import lockLogo from "../../../public/assets/lock-icon.png";
import { UseFormRegister, FieldValues } from "react-hook-form";

type LoginInputProps = {
  label?: string;
  name: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
  watch?: UseFormRegister<FieldValues> | undefined;
};

const LoginInput = ({
  name,
  label,
  type,
  register,
  errorMessage,
}: LoginInputProps) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xs text-main-grey-dark" htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center mb-6">
        <input
          {...register(name, {
            required: "Can't be emtpy",
          })}
          type={type}
          className={`w-full focus:outline-none focus:border-main-purple  focus:drop-shadow-input rounded-md pl-10 pr-4 py-2   ${
            errorMessage
              ? " border border-red-500 focus:border-red-500 focus:drop-shadow-none"
              : "border-[0.75px] "
          }`}
          name={name}
          placeholder={
            name === "email" ? "e.g. you@example.com" : "At least 8 characters"
          }
        />
        {errorMessage && (
          <p className="absolute right-4 text-xs text-red-500">
            {errorMessage}
          </p>
        )}
        <Image
          src={name === "email" ? emailLogo : lockLogo}
          alt="email logo"
          className="absolute left-4"
        />
      </div>
    </div>
  );
};

export default LoginInput;
