import Image from "next/image";

import phoneImage from "../../public/assets/preview-section.png";

import {
  LinkIconsType,
  ProfileDetailsType,
} from "../protected/protectedFileTypes";
import PhoneLinksData from "./PhoneLinksData";
import PhoneLinksUserDetails from "./PhoneLinksUserDetails";

const PhoneLinks = ({
  profileDetails,
  linkIcons,
  from,
}: {
  profileDetails: ProfileDetailsType;
  linkIcons: LinkIconsType;
  from?: string;
}) => {
  return (
    <div
      className={`relative w-[308px] h-[600px] ${
        from === "preview"
          ? " bg-main-grey-light sm:rounded-3xl sm:shadow-lg"
          : ""
      }`}>
      <div className="absolute z-10 flex flex-col items-center justify-center space-y-10 w-full h-full pt-6">
        <PhoneLinksUserDetails profileDetails={profileDetails} />
        <PhoneLinksData linkIcons={linkIcons} />
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
