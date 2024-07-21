"use client";
import React, { useState } from "react";
import LsaFileSvg from "../formLinks/icons/LsaFileSvg";
import { uploadImageAvatar } from "@/utils/supabase/db_actions_clientsb";
import Loader from "../Loader";
import { useProfileDetails } from "@/app/store";

const ProfileImage = ({ profileImageURl }: { profileImageURl: string }) => {
  const userDetails = useProfileDetails((state) => state.profileDetailsState);

  const setUserDetails = useProfileDetails(
    (state) => state.updateProfileDetailsArray
  );
  const [btnDisabled, setBtnDisabled] = useState(false);
  const profileImage = profileImageURl === null ? "" : profileImageURl;
  const [imgUploadLocalUrl, setImgUploadLocalUrl] = useState(profileImage);

  const loadFile = async (event?: React.ChangeEvent<HTMLInputElement>) => {
    setBtnDisabled(true);
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      setImgUploadLocalUrl(URL.createObjectURL(event.target.files[0]));
      const newUrl = await uploadImageAvatar(event.target.files[0]);

      setUserDetails({
        ...userDetails,
        image_url: newUrl,
      });
    }

    setBtnDisabled(false);
  };

  return (
    <>
      {btnDisabled && (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <div className="grid space-y-2 sm:space-y-0 sm:grid-cols-3 p-5 bg-main-grey-light rounded-lg">
        <span className=" text-main-grey place-self-start my-auto">
          Profile picture
        </span>
        <label
          htmlFor="imageUrl"
          className={`flex ${
            imgUploadLocalUrl === ""
              ? "bg-main-purple-light"
              : " bg-main-grey-border"
          } rounded-lg w-48 h-48 justify-center items-center cursor-pointer`}>
          {imgUploadLocalUrl === "" ? (
            <div
              className={`flex flex-col justify-center items-center space-y-3`}>
              <LsaFileSvg pathFill="fill-[#633CFF]" />
              <span className=" text-main-purple font-semibold">
                + Upload Image
              </span>
            </div>
          ) : (
            <div className="relative flex justify-center items-center w-48 h-48">
              <div className="z-10 absolute space-y-3 flex flex-col justify-center items-center">
                <LsaFileSvg pathFill="fill-white" />
                <span className=" text-white font-semibold">Change Image</span>
              </div>
              <img
                src={imgUploadLocalUrl}
                alt="loadedImage"
                className=" rounded-lg brightness-50 max-h-full max-w-full "
              />
            </div>
          )}
        </label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="file"
          className="hidden"
          onChange={(e) => loadFile(e)}
        />
        <span className=" text-xs text-main-grey  place-self-center ">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </span>
      </div>
    </>
  );
};

export default ProfileImage;
