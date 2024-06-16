import { ReactNode } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import phoneImage from "../../public/assets/preview-section.png";

import Placeholder from "../components/phone/Placeholder";
import FormLinks from "../components/FormLinks";
import {
  LsaFbSvg,
  LsaGhSvg,
  LsaLiSvg,
  LsaYtSvg,
  LsaLinkSvg,
} from "../components/formLinks/icons";
import { link } from "fs/promises";

const LINK_PLACEHOLDER_COUNT: number = 5;

const getLinkPlacholderCount = (userLinkCount: number): number[] => {
  if (LINK_PLACEHOLDER_COUNT - userLinkCount > 0) {
    const linkNum = LINK_PLACEHOLDER_COUNT - userLinkCount;
    return Array.from({ length: linkNum }, (_, i) => i);
  }
  return [];
};

const userLinks = (links: []) => {
  const placeholderCount = getLinkPlacholderCount(links.length);
  return;
};

const userProfileSample = {
  id: "9cb8844d-8f53-4ce7-8e94-465d2becbfcb",
  email: "brailegawen@gmail.com",
  name: "brailecg",
  profileName: "Braile Gawigawen",
  imageUrl: "w",
  links: [
    { id: 1, website: "Github", color: "#1A1A1A", url: "https://github.com" },
    {
      id: 2,
      website: "Youtube",
      color: "#EE3939",
      url: "https://youtube.com",
    },
    {
      id: 5,
      website: "Youtube",
      color: "#EE3939",
      url: "https://youtube.com",
    },
  ],
};

const linkIcons = {
  1: <LsaGhSvg fill="white" />,
  2: <LsaYtSvg fill="white" />,
  3: <LsaLiSvg fill="white" />,
  4: <LsaFbSvg fill="white" />,
};

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className=" p-4 sm:p-0 grid grid-rows-1 grid-cols-5 lg:space-x-6 sm:mt-6 ">
      <div
        className={`col-span-2 hidden lg:flex justify-center items-center bg-white relative rounded-lg`}>
        <div className="relative w-[308px] h-[600px]">
          <div className="absolute z-10 flex flex-col items-center justify-center space-y-10 w-full h-full">
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
                getLinkPlacholderCount(userProfileSample?.links?.length)
                  .length > 0 &&
                getLinkPlacholderCount(userProfileSample?.links?.length)?.map(
                  (item) => {
                    return <Placeholder variant="linkHolder" />;
                  }
                )}
            </div>
          </div>
          <Image
            src={phoneImage}
            alt="Picture of the author"
            sizes="308px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className=" grid grid-rows-[1fr_auto] col-span-5 lg:col-span-3 bg-white rounded-lg">
        <div className=" min-h-full p-6 space-y-6 sm:space-y-10 grid grid-rows-[auto_1fr]">
          <div className="space-y-10">
            <div className="space-y-3">
              <h1 className="font-bold text-2xl text-main-grey-dark">
                Customize your links
              </h1>
              <p className=" text-main-grey">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
          </div>

          <FormLinks />
        </div>

        <div className=" min-h-[95px] flex justify-end items-center p-6 border-t">
          <button
            form="link-form"
            className=" w-full sm:w-24 h-11 bg-main-purple rounded-md text-white hover:bg-main-purple-hover disabled:bg-main-purple-hover">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
