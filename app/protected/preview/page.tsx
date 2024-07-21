import React from "react";
import PhoneLinks from "@/app/components/PhoneLinks";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LinkDataType, ProfileDetailsType } from "../protectedFileTypes";
import { getProfileDetails, getAllLinks } from "@/utils/supabase/db_actions";
import PreviewButton from "./PreviewButton";
import BackToEditor from "./BackToEditor";

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const profileDetails: ProfileDetailsType = await getProfileDetails(user?.id);
  const linkData: LinkDataType[] | undefined = await getAllLinks(user?.id);

  return (
    <div className="w-full relative">
      <div className=" sm:p-6 sm:bg-main-purple sm:h-[40vh] rounded-b-3xl -z-10">
        <div className="flex justify-between rounded-lg bg-main-grey-light px-6 py-4">
          <BackToEditor />
          <PreviewButton userId={user?.id} />
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
