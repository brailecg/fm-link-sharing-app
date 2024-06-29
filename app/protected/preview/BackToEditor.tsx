"use client";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import React, { useState } from "react";

const BackToEditor = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const handleClickLink = () => {
    setBtnDisabled(true);
  };
  return (
    <>
      {btnDisabled && (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <Link
        onClick={handleClickLink}
        href={"/protected/profile"}
        className={`min-[370px]:w-40 hover:bg-main-purple-light flex items-center justify-center px-4 py-3 border border-main-purple rounded-lg group font-semibold text-main-purple`}>
        Back to Editor
      </Link>
    </>
  );
};

export default BackToEditor;
