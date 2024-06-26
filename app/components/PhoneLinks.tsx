import Image from "next/image";

import phoneImage from "../../public/assets/preview-section.png";
import Placeholder from "../components/phone/Placeholder";

import {
  LinkIconsType,
  ProfileDetailsType,
  LinkDataType,
} from "../protected/protectedFileTypes";
import PhoneLinksData from "./PhoneLinksData";

const PhoneLinks = ({
  profileDetails,
  linkData,
  linkIcons,
  from,
}: {
  profileDetails: ProfileDetailsType;
  linkData: LinkDataType[] | undefined;
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
        <div className=" grid place-items-center gap-4 grid-cols-1">
          {profileDetails?.image_url ? (
            <Image
              src={
                "https://fdksslojrpadbebswbsg.supabase.co/storage/v1/object/public/icons/supabase-logo-icon.png?t=2024-06-16T03%3A03%3A01.998Z"
              }
              alt="User Image"
              width={96}
              height={96}
              className="rounded-full"
            />
          ) : (
            <Placeholder variant="imageHolder" />
          )}
          {profileDetails?.first_name ? (
            <p className=" text-lg font-semibold text-main-grey-dark">
              {profileDetails?.first_name}
            </p>
          ) : (
            <Placeholder variant="nameHolder" />
          )}
          {profileDetails?.email ? (
            <p className=" text-sm text-main-grey">{profileDetails?.email}</p>
          ) : (
            <Placeholder variant="emailHolder" />
          )}
        </div>
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
