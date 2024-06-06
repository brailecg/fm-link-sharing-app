import React, { ComponentProps } from "react";
import Image from "next/image";
import lockLogo from "../../../public/assets/lock-icon.png";

type Props = ComponentProps<"label"> & {
  label?: string;
  name?: string;
};

const PasswordInput = ({ name, label }: Props) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xs text-main-grey-dark" htmlFor={name}>
        {label}
      </label>
      <div className="relative flex items-center mb-6">
        <input
          type="password"
          className="w-full focus:outline-none focus:border-main-purple  focus:drop-shadow-input rounded-md pl-10 pr-4 py-2  border-[0.75px]"
          name={name}
          placeholder="At least 8 characters"
          required
        />
        <Image src={lockLogo} alt="email logo" className="absolute left-4" />
      </div>
    </div>
  );
};

export default PasswordInput;
