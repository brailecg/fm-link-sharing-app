import React from "react";
import Link from "next/link";

import PhoneLinks from "@/app/components/PhoneLinks";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LinkDataType, ProfileDetailsType } from "../protectedFileTypes";
import { getProfileDetails, getAllLinks } from "@/utils/supabase/db_actions";

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const profileDetails: ProfileDetailsType = await getProfileDetails();
  const linkData: LinkDataType[] | undefined = await getAllLinks();
  return (
    <div className="w-full relative">
      <div className=" sm:p-6 sm:bg-main-purple sm:h-[40vh] rounded-b-3xl -z-10">
        <div className="flex justify-between rounded-lg bg-main-grey-light px-6 py-4">
          <Link
            href={"/protected/profile"}
            className={`min-[370px]:w-40 hover:bg-main-purple-light flex items-center justify-center px-4 py-3 border border-main-purple rounded-lg group font-semibold text-main-purple`}>
            Back to Editor
          </Link>
          <button
            className={` min-[370px]:w-40 bg-main-purple hover:bg-main-purple-hover flex items-center justify-center px-4 py-3   rounded-lg group font-semibold text-white`}>
            Share Link
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center sm:absolute sm:-translate-x-1/2 sm:translate-y-[0] left-1/2 top-1/2 z-10">
        <PhoneLinks
          linkData={linkData}
          profileDetails={profileDetails}
          from="preview"
        />
      </div>
    </div>
  );
};

export default page;
