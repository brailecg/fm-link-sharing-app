import React, { ComponentProps } from "react";

type Props = ComponentProps<"label"> & {
  label?: string;
};

const PasswordInput = ({ label }: Props) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xs text-main-grey-dark" htmlFor="email">
        {label}
      </label>
      <input
        className=" bg-lock-icon bg-no-repeat bg-[center_left_1rem] rounded-md pl-10 pr-4 py-2  border mb-6"
        name="email"
        placeholder="At least 8 characters"
        required
      />
    </div>
  );
};

export default PasswordInput;
