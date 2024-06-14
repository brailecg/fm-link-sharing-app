import React from "react";
import SelectPlatform from "./SelectPlatform";

const RepeaterLinks = ({ removeLink }: any) => {
  return (
    <div className=" bg-main-grey-light p-4 rounded-lg">
      <div className="flex justify-between">
        <p className=" text-main-grey font-semibold">= Link</p>
        <button onClick={() => removeLink()} className=" text-main-grey">
          Remove
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default RepeaterLinks;
