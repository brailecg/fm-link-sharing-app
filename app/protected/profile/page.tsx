import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";

import { z } from "zod";
import {
  LsaFbSvg,
  LsaGhSvg,
  LsaLiSvg,
  LsaYtSvg,
} from "../../components/formLinks/icons";
import PhoneLinks from "../../components/PhoneLinks";
import LsaFileSvg from "@/app/components/formLinks/icons/LsaFileSvg";
import ProfileInput from "@/app/components/formProfiles/ProfileInput";
import ProfileImage from "@/app/components/formProfiles/ProfileImage";

const userProfileSampleType = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  profileName: z.string(),
  imageUrl: z.string(),
  links: z
    .object({
      id: z.number(),
      website: z.string(),
      color: z.string(),
      url: z.string(),
    })
    .array(),
});
// Infer the type from the schema
export type UserProfileSampleType = z.infer<typeof userProfileSampleType>;
const userProfileSample: UserProfileSampleType = {
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

// Define the TypeScript type
export type LinkIconsType = {
  [key: number]: JSX.Element;
};

const linkIcons: LinkIconsType = {
  1: <LsaGhSvg fill="white" />,
  2: <LsaYtSvg fill="white" />,
  3: <LsaLiSvg fill="white" />,
  4: <LsaFbSvg fill="white" />,
};

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
              <h1 className="font-bold text-2xl text-main-grey-dark">
                Profile Details
              </h1>
              <p className=" text-main-grey">
                Add your details to create a personal touch to your profile.
              </p>
            </div>
          </div>
          <div>
            <form
              id="profile-link"
              className="space-y-4 grid grid-rows-[auto_1fr]">
              <ProfileImage />
              <div className=" bg-main-grey-light rounded-lg p-5 space-y-4">
                <ProfileInput
                  label="First name*"
                  htmlFor="firstName"
                  placeholder="e.g. John"
                />
                <ProfileInput
                  label="Last name*"
                  htmlFor="lastName"
                  placeholder="e.g. Appleseed"
                />
                <ProfileInput
                  label="Email"
                  htmlFor="email"
                  placeholder="e.g. email@example.com"
                />
              </div>
            </form>
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
