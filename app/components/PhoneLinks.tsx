import Image from "next/image";
import Link from "next/link";
import phoneImage from "../../public/assets/preview-section.png";

import Placeholder from "../components/phone/Placeholder";

import { LsaLinkSvg } from "../components/formLinks/icons";

import {
  UserProfileSampleType,
  LinkIconsType,
} from "../protected/(linkPages)/link/page";

const LINK_PLACEHOLDER_COUNT: number = 5;

const getLinkPlacholderCount = (userLinkCount: number): number[] => {
  if (LINK_PLACEHOLDER_COUNT - userLinkCount > 0) {
    const linkNum = LINK_PLACEHOLDER_COUNT - userLinkCount;
    return Array.from({ length: linkNum }, (_, i) => i);
  }
  return [];
};

const PhoneLinks = ({
  userProfileSample,
  linkIcons,
  from,
}: {
  userProfileSample: UserProfileSampleType;
  linkIcons: LinkIconsType;
  from?: string;
}) => {
  return (
    <div
      className={`relative w-[308px] h-[600px] border ${
        from === "preview"
          ? " bg-main-grey-light sm:rounded-3xl sm:shadow-lg"
          : ""
      }`}>
      <div className="absolute z-10 flex flex-col items-center justify-center space-y-10 w-full h-full pt-6">
        <div className=" grid place-items-center gap-4 grid-cols-1">
          {userProfileSample?.imageUrl ? (
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
          {userProfileSample?.profileName ? (
            <p className=" text-lg font-semibold text-main-grey-dark">
              {userProfileSample?.profileName}
            </p>
          ) : (
            <Placeholder variant="nameHolder" />
          )}
          {userProfileSample?.email ? (
            <p className=" text-sm text-main-grey">
              {userProfileSample?.email}
            </p>
          ) : (
            <Placeholder variant="emailHolder" />
          )}
        </div>
        <div className=" grid place-items-center gap-5 grid-cols-1">
          {userProfileSample?.links?.map((link) => {
            const bgColor = `${link?.color}`;
            return (
              <Link
                key={link?.id}
                style={{ backgroundColor: bgColor }}
                className={`w-[237px] h-[44px] rounded-md text-white flex justify-between items-center px-4`}
                href={link.url}>
                <>
                  <div className="flex items-center space-x-2 ">
                    {link?.id &&
                    linkIcons[link?.id as keyof typeof linkIcons] ? (
                      linkIcons[link?.id as keyof typeof linkIcons]
                    ) : (
                      <span className=" w-[13px] h-[15px]">
                        <LsaLinkSvg pathFill="fill-white" />
                      </span>
                    )}
                    <span className=" text-xs">{link?.website}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              </Link>
            );
          })}
          {userProfileSample?.links &&
            getLinkPlacholderCount(userProfileSample?.links?.length).length >
              0 &&
            getLinkPlacholderCount(userProfileSample?.links?.length)?.map(
              (item, index) => {
                return <Placeholder key={index} variant="linkHolder" />;
              }
            )}
        </div>
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
