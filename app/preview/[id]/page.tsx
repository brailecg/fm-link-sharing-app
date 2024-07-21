import PhoneLinks from "@/app/components/PhoneLinks";
import {
  LinkDataType,
  ProfileDetailsType,
} from "@/app/protected/protectedFileTypes";
import { getProfileDetails, getAllLinks } from "@/utils/supabase/db_actions";

const Preview = async ({ params }: { params: { id: string } }) => {
  const profileDetails: ProfileDetailsType = await getProfileDetails(params.id);
  const linkData: LinkDataType[] | undefined = await getAllLinks(params.id);

  return (
    <div className="w-full relative">
      <div className=" sm:p-6 sm:bg-main-purple sm:h-[40vh] rounded-b-3xl -z-10"></div>
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

export default Preview;
