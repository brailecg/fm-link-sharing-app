import { createClient } from "../../../../utils/supabase/server";
import { redirect } from "next/navigation";
import FormLinks from "../../../components/FormLinks";
import PhoneLinks from "../../../components/PhoneLinks";
import { getAllLinks, getProfileDetails } from "@/utils/supabase/db_actions";
import { LinkDataType, ProfileDetailsType } from "../../protectedFileTypes";

export default async function ProtectedPage() {
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
    <div className=" p-4 sm:p-0 grid grid-rows-1 grid-cols-5 lg:space-x-6 sm:mt-6 ">
      <div
        className={`col-span-2 hidden lg:flex justify-center items-center bg-white relative rounded-lg`}>
        <PhoneLinks
          from="links"
          linkData={linkData}
          profileDetails={profileDetails}
        />
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

          <FormLinks linkData={linkData} />
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
