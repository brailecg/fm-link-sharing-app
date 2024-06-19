import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { z } from "zod";
import { profileSchema } from "../FormProfile";

type ProfileInputType = {
  label: string;
  htmlFor: "firstName" | "lastName" | "email";
  placeholder: string;
  register: UseFormRegister<z.infer<typeof profileSchema>>;
  errorMessage?: string;
};

const ProfileInput = ({
  label,
  htmlFor,
  placeholder,
  register,
  errorMessage,
}: ProfileInputType) => {
  return (
    <div className="grid sm:grid-cols-3 space-y-1 sm:space-y-0">
      <label
        htmlFor={htmlFor}
        className=" my-auto text-main-grey text-xs sm:text-base">
        {label}
      </label>
      <div className="flex items-center col-span-2 relative">
        <input
          {...register(htmlFor, {
            required: "Can't be emtpy",
          })}
          id={htmlFor}
          placeholder={placeholder}
          className={`w-full focus:outline-none focus:border-main-purple  focus:drop-shadow-input rounded-md px-4 py-2 text-sm h-12  ${
            errorMessage
              ? " border border-red-500 focus:border-red-500 focus:drop-shadow-none"
              : "border "
          }`}
        />
        {errorMessage && (
          <p className="absolute right-4 text-xs text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;
