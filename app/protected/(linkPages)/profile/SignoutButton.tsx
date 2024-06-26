"use client";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Loader from "@/app/components/Loader";
import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const supabase = createClient();
  const handleSignout = async () => {
    setIsSigningOut(true);
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }
  };
  return (
    <div className="s">
      {isSigningOut ? (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      ) : (
        ""
      )}
      <button
        onClick={handleSignout}
        className={` ${
          isSigningOut ? " opacity-50" : ""
        }  border border-main-purple hover:bg-main-purple-light flex items-center justify-center px-4 py-1   rounded-md group text-main-purple`}>
        Sign Out
      </button>
    </div>
  );
};

export default SignoutButton;
