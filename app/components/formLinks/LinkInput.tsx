import React from "react";
import Image from "next/image";
import { LsaLinkSvg } from "./icons";
import { UseFormRegister, FieldValues } from "react-hook-form";
type LoginInputProps = {
  label?: string;
  name: string;
  type?: string;
  register: UseFormRegister<
    FieldValues & {
      website: {
        id: number;
        name: string;
        icon?: any;
      };
      linkString: string;
    }
  >;
  errorMessage?: string;
};

const LinkInput = ({
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
