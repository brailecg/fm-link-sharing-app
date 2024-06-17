import React from "react";

type ProfileInputType = {
  label: string;
  htmlFor: string;
  placeholder: string;
};

const ProfileInput = ({ label, htmlFor, placeholder }: ProfileInputType) => {
  return (
    <div className="grid sm:grid-cols-3">
      <label
        htmlFor={htmlFor}
        className=" my-auto text-main-grey text-xs sm:text-base">
        {label}
      </label>
      <input
        id={htmlFor}
        type="text"
        placeholder={placeholder}
        className=" col-span-2 h-12 rounded-md p-4 border-2 border-main-grey-border"
      />
    </div>
  );
};

export default ProfileInput;
