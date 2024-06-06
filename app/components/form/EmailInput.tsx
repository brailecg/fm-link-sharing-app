import Image from "next/image";
import emailLogo from "../../../public/assets/email-icon.png";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"label"> & {
  label?: string;
  name?: string;
};

const EmailInput = ({ name, label }: Props) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xs text-main-grey-dark" htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center mb-6">
        <input
          type="email"
          className="w-full focus:outline-none focus:border-main-purple  focus:drop-shadow-input rounded-md pl-10 pr-4 py-2  border-[0.75px]"
          name={name}
          placeholder="e.g. you@example.com"
          required
        />
        <Image src={emailLogo} alt="email logo" className="absolute left-4" />
      </div>
    </div>
  );
};

export default EmailInput;
