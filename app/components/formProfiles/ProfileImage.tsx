"use client";
import React, { useState } from "react";

import LsaFileSvg from "../formLinks/icons/LsaFileSvg";

const ProfileImage = () => {
  const [imgUploadLocalUrl, setImgUploadLocalUrl] = useState("");

  const loadFile = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      setImgUploadLocalUrl(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="grid space-y-2 sm:space-y-0 sm:grid-cols-3 p-5 bg-main-grey-light rounded-lg">
      <span className=" text-main-grey place-self-start my-auto">
        Profile picture
      </span>
      <label
        htmlFor="imageUrl"
        className={`flex bg-main-purple-light rounded-lg w-48 h-48 justify-center items-center cursor-pointer`}>
        {imgUploadLocalUrl === "" ? (
          <div
            className={`flex flex-col justify-center items-center space-y-3`}>
            <LsaFileSvg pathFill="fill-[#633CFF]" />
            <span className=" text-main-purple font-semibold">
              + Upload Image
            </span>
          </div>
        ) : (
          <div className="relative flex justify-center items-center">
            <div className="z-10 absolute space-y-3 flex flex-col justify-center items-center">
              <LsaFileSvg pathFill="fill-white" />
              <span className=" text-white font-semibold">Change Image</span>
            </div>
            <img
              src={imgUploadLocalUrl}
              alt="loadedImage"
              className=" rounded-lg brightness-50"
            />
          </div>
        )}
      </label>
      <input
        id="imageUrl"
        type="file"
        className="hidden"
        onChange={(e) => loadFile(e)}
      />
      <span className=" text-xs text-main-grey  place-self-center ">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </span>
    </div>
  );
};

export default ProfileImage;
