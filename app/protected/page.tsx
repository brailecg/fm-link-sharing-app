import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import phoneImage from "../../public/assets/preview-section.png";
import getStarted from "../../public/assets/get-started.png";
import Placeholder from "../components/phone/Placeholder";

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
            <button className="border border-main-purple rounded-lg w-full text-main-purple text-sm font-semibold h-11 hover:bg-main-purple-light">
              + Add new link
            </button>
          </div>

          {/* <div className="link-list">
            <div className=" p-5 bg-main-grey-light rounded-lg">
              <div className="flex justify-between">
                <p className=" font-bold text-main-grey">= Link #1</p>
                <p className=" text-main-grey">Remove</p>
              </div>

            </div>
          </div> */}
          <div className=" flex flex-col justify-center items-center  bg-main-grey-light rounded-lg space-y-6 sm:space-y-10 p-4 sm:p-0">
            <Image src={getStarted} alt="get-started" />
            <h3 className="font-bold text-2xl text-main-grey-dark">
              Let's get you started
            </h3>
            <p className=" text-main-grey max-w-[488px] text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We're here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <div className=" min-h-[95px] flex justify-end items-center p-6">
          <button
            disabled
            className=" w-full sm:w-24 h-11 bg-main-purple rounded-md text-white hover:bg-main-purple-hover disabled:bg-main-purple-hover">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
