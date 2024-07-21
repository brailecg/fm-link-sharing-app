"use client";
import Image from "next/image";
import phoneImage from "../../public/assets/preview-section.png";
import {
  LinkDataType,
  LinkIconsType,
  ProfileDetailsType,
} from "../protected/protectedFileTypes";
import PhoneLinksData from "./PhoneLinksData";
import PhoneLinksUserDetails from "./PhoneLinksUserDetails";
import { LsaFbSvg, LsaGhSvg, LsaLiSvg, LsaYtSvg } from "./formLinks/icons";
import { useProfileDetails } from "../store";
import { useEffect } from "react";

export const linkIcons: LinkIconsType = {
  github: [<LsaGhSvg fill="white" />, "#1A1A1A"],
  youtube: [<LsaYtSvg fill="white" />, "#EE3939"],
  linkedin: [<LsaLiSvg fill="white" />, "#0a66c2"],
  facebook: [<LsaFbSvg fill="white" />, "#0866ff"],
};

const PhoneLinks = ({
  profileDetails,
  linkData,
  from,
}: {
  profileDetails: ProfileDetailsType;
  linkData: LinkDataType[] | undefined;
  from?: string;
}) => {
  const userDetails = useProfileDetails((state) => state.profileDetailsState);

  const setUserDetails = useProfileDetails(
    (state) => state.updateProfileDetailsArray
  );

  useEffect(() => {
    setUserDetails(userDetails !== undefined ? userDetails : profileDetails);
  }, []);

  return (
    <div
      className={`relative w-[308px] h-[600px] ${
        from === "preview"
          ? " bg-main-grey-light sm:rounded-3xl sm:shadow-lg"
          : ""
      }`}>
      <div className="absolute z-10 flex flex-col items-center justify-center space-y-4 w-full h-full">
        <PhoneLinksUserDetails profileDetails={profileDetails} />
        <PhoneLinksData linkData={linkData} linkIcons={linkIcons} />
      </div>

      <Image
        className={`${from === "preview" ? "hidden" : ""}`}
        src={phoneImage}
        alt="Picture of the author"
        sizes="308px"
        fill
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default PhoneLinks;
