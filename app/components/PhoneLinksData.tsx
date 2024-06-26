"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { LsaLinkSvg } from "../components/formLinks/icons";
import Placeholder from "../components/phone/Placeholder";
import { LinkDataType, LinkIconsType } from "../protected/protectedFileTypes";
import { useLinkDataStore } from "../store";

const LINK_PLACEHOLDER_COUNT: number = 5;

const getLinkPlacholderCount = (
  userLinkCount: number | undefined
): number[] => {
  const userLinkCounter = userLinkCount === undefined ? 0 : userLinkCount;
  if (LINK_PLACEHOLDER_COUNT - userLinkCounter > 0) {
    const linkNum = LINK_PLACEHOLDER_COUNT - userLinkCounter;
    return Array.from({ length: linkNum }, (_, i) => i);
  }
  return [];
};

const PhoneLinksData = ({
  linkData,
  linkIcons,
}: {
  linkData: LinkDataType[] | undefined;
  linkIcons: LinkIconsType;
}) => {
  const linkDataArrayLocal = useLinkDataStore((state) => state.linkDataArray);

  return (
    <div className=" grid place-items-center grid-cols-1  overflow-y-auto custom-scroll h-80">
      {linkDataArrayLocal?.map((link) => {
        const bgColor = `${linkIcons[link?.website][1]}`;
        return (
          <Link
            key={link?.link_id}
            style={{ backgroundColor: bgColor }}
            className={`w-[237px] h-[44px] rounded-md text-white flex justify-between items-center px-4`}
            href={link?.url}>
            <>
              <div className="flex items-center space-x-2 ">
                {link?.link_id &&
                linkIcons[link?.website as keyof typeof linkIcons][0] ? (
                  linkIcons[link?.website as keyof typeof linkIcons][0]
                ) : (
                  <span className=" w-[13px] h-[15px]">
                    <LsaLinkSvg pathFill="fill-white" />
                  </span>
                )}
                <span className=" text-xs capitalize">{link?.website}</span>
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
      {getLinkPlacholderCount(linkDataArrayLocal?.length).length > 0 &&
        getLinkPlacholderCount(linkDataArrayLocal?.length)?.map(
          (item, index) => {
            return <Placeholder key={item} variant="linkHolder" />;
          }
        )}
    </div>
  );
};

export default PhoneLinksData;
