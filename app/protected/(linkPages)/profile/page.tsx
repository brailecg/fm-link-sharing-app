import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { z } from "zod";

import PhoneLinks from "../../../components/PhoneLinks";
import FormProfile from "@/app/components/FormProfile";
import { userProfileSample, linkIcons } from "../link/page";
import SignoutButton from "./SignoutButton";

const profileSchema = z.object({});

export default async function Profile() {
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
        <PhoneLinks
          userProfileSample={userProfileSample}
          linkIcons={linkIcons}
        />
      </div>
      <div className=" grid grid-rows-[1fr_auto] col-span-5 lg:col-span-3 bg-white rounded-lg">
        <div className=" min-h-full p-6 space-y-6 sm:space-y-10 grid grid-rows-[auto_1fr]">
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-main-grey-dark">
                  Profile Details
                </h1>
                <SignoutButton />
              </div>
              <p className=" text-main-grey">
                Add your details to create a personal touch to your profile.
              </p>
            </div>
          </div>
          <div>
            <FormProfile />
          </div>
        </div>

        <div className=" min-h-[95px] flex justify-end items-center p-6 border-t">
          <button
            form="profile-form"
            className=" w-full sm:w-24 h-11 bg-main-purple rounded-md text-white hover:bg-main-purple-hover disabled:bg-main-purple-hover">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
