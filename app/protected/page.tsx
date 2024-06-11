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
    <div className="h-full grid grid-rows-1 grid-cols-5 lg:space-x-6 sm:mt-6 ">
      <div
        className={` col-span-2 hidden lg:flex justify-center bg-white relative`}>
        <div className="z-10 flex flex-col items-center justify-center space-y-14">
          <div className="grid place-items-center gap-4 grid-cols-1">
            <Placeholder variant="imageHolder" />
            <Placeholder variant="nameHolder" />
            <Placeholder variant="emailHolder" />
          </div>
          <div className="grid place-items-center gap-4 grid-cols-1">
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
            <Placeholder variant="linkHolder" />
          </div>
        </div>
        <div className="absolute w-[308px] h-[632px]">
          <Image src={phoneImage} alt="image-section" />
        </div>
      </div>
      <div className=" col-span-3 bg-white">deets</div>
    </div>
  );
}
