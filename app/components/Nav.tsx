"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkIcon from "./svg/LinkIcon";
import ProfileIcon from "./svg/ProfileIcon";
import PreviewIcon from "./svg/PreviewIcon";
import lsaIcon from "../../public/assets/lsa-icon.png";
import lsaLogo from "../../public/assets/lsa-logo.png";
import Loader from "./Loader";
import { useIsLoadingStore } from "../store";

const Nav = () => {
  const isLoadingState = useIsLoadingStore((state) => state.isLoading);
  const setIsLoadingState = useIsLoadingStore((state) => state.updateIsLoading);

  const pathName = usePathname();

  const linkColor =
    pathName === "/protected/link"
      ? ["fill-main-purple", "text-main-purple", "bg-main-purple-light"]
      : ["fill-main-grey", "text-main-grey", "bg-white"];
  const profileColor =
    pathName === "/protected/profile"
      ? ["fill-main-purple", "text-main-purple", "bg-main-purple-light"]
      : ["fill-main-grey", "text-main-grey", "bg-white"];

  const handleClickLink = () => {
    setIsLoadingState(true);
  };

  return (
    <>
      {isLoadingState && (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <div className=" bg-white w-full h-[74px] flex items-center justify-around  py-4 sm:rounded-lg">
        <Link href={"/protected/link"} onClick={handleClickLink}>
          <Image
            className="sm:hidden"
            alt="lsaIcon"
            width={32}
            height={32}
            src={lsaIcon}
          />
          <Image className="hidden sm:flex" alt="lsaLogo" src={lsaLogo} />
        </Link>
        <div className="flex">
          <Link
            onClick={handleClickLink}
            href={"/protected/link"}
            className={`flex items-center justify-center px-7 py-3   rounded-md ${linkColor[2]} space-x-1 group`}>
            <LinkIcon width={21} height={20} pathFill={linkColor[0]} />
            <span
              className={`hidden sm:flex font-semibold group-hover:text-main-purple ${linkColor[1]}`}>
              Links
            </span>
          </Link>
          <Link
            onClick={handleClickLink}
            href="/protected/profile"
            className={`flex items-center justify-center px-7 py-3   rounded-md ${profileColor[2]} space-x-1 group`}>
            <ProfileIcon width={21} height={20} pathFill={profileColor[0]} />
            <span
              className={`hidden sm:flex font-semibold group-hover:text-main-purple ${profileColor[1]}`}>
              Profile Details
            </span>
          </Link>
        </div>
        <Link
          onClick={handleClickLink}
          href={"/protected/preview"}
          className={` sm:w-28 hover:bg-main-purple-light flex items-center justify-center px-4 py-3 border-2 border-main-purple rounded-lg group`}>
          <PreviewIcon width={21} height={20} />
          <span className={`hidden sm:flex font-semibold text-main-purple`}>
            Preview
          </span>
        </Link>
      </div>
    </>
  );
};

export default Nav;
