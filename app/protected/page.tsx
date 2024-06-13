import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import phoneImage from "../../public/assets/preview-section.png";
import getStarted from "../../public/assets/get-started.png";
import Placeholder from "../components/phone/Placeholder";
import FormLink from "../components/FormLink";

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
        <div className=" z-10 flex flex-col items-center justify-evenly max-h-[632px] space-y-10">
          <div className=" grid place-items-center gap-4 grid-cols-1">
            <Placeholder variant="imageHolder" />
            <Placeholder variant="nameHolder" />
            <Placeholder variant="emailHolder" />
          </div>
          <div className=" grid place-items-center gap-5 grid-cols-1">
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
          </div>
        </div>
        <div className="absolute max-w-[308px] max-h-[632px]">
          <Image src={phoneImage} alt="image-section" />
        </div>
      </div>
      <div className=" grid grid-rows-[1fr_auto] col-span-5 lg:col-span-3 bg-white rounded-lg">
        <div className="min-h-full border-b p-6 space-y-6 sm:space-y-10 grid grid-rows-[auto_1fr]">
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
          <FormLink />
        </div>
        <div className=" min-h-[95px] flex justify-end items-center p-6">
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
