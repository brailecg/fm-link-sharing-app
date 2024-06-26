import React from "react";
import { LsaLinkSvg } from "./icons";
import { UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "@/app/protected/protectedFileTypes";

type LoginInputProps = {
  index: number;
  label?: string;
  name: string;
  type?: string;
  register: UseFormRegister<z.infer<typeof FormSchema>>;
  errorMessage?: string;
};

const LinkInput = ({
  index,
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
          {...register(`links.${index}.linkString`, {
            required: "Can't be emtpy",
          })}
          type={type}
          className={`w-full focus:outline-none focus:border-main-purple  focus:drop-shadow-input rounded-md pl-8 pr-4 py-2 text-sm h-12  ${
            errorMessage
              ? " border border-red-500 focus:border-red-500 focus:drop-shadow-none"
              : "border "
          }`}
          name={name}
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
        {errorMessage && (
          <p className="absolute right-4 text-xs text-red-500">
            {errorMessage}
          </p>
        )}
        <LsaLinkSvg
          width={20}
          height={20}
          pathFill="fill-[#737373] absolute left-2"
        />
      </div>
    </div>
  );
};

export default LinkInput;
