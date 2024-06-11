import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import phoneImage from "../../public/assets/preview-section.png";
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
        <div className="min-h-full border-b p-6 space-y-10">
          <div className="space-y-3">
            <h1 className="font-bold text-2xl text-main-grey-dark">
              Customize your links
            </h1>
            <p className=" text-main-grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <button className="border border-main-purple rounded-lg w-full text-main-purple text-sm font-semibold h-11 hover:bg-main-purple-light">
            + Add new link
          </button>
          <div className="link-list">
            <div className=" p-5 bg-main-grey-light rounded-lg">
              <div className="flex justify-between">
                <p className=" font-bold text-main-grey">= Link #1</p>
                <p className=" text-main-grey">Remove</p>
              </div>
            </div>
          </div>
        </div>
        <div>save</div>
      </div>
    </div>
  );
}
