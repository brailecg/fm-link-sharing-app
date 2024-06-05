import React, { ComponentProps } from "react";

type Props = ComponentProps<"label"> & {
  label?: string;
};

const EmailInput = ({ label }: Props) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xs text-main-grey-dark" htmlFor="email">
        {label}
      </label>
      <input
        className=" bg-email-icon bg-no-repeat bg-[center_left_1rem] rounded-md pl-10 pr-4 py-2  border mb-6"
        name="email"
        placeholder="e.g. you@example.com"
        required
      />
    </div>
  );
};

export default EmailInput;
