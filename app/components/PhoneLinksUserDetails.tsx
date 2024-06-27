"use client";
import React from "react";
import Placeholder from "../components/phone/Placeholder";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { ProfileDetailsType } from "../protected/protectedFileTypes";

const PhoneLinksUserDetails = ({
  profileDetails,
}: {
  profileDetails: ProfileDetailsType;
}) => {
  const [userDetails, setUserDetails] = useState(profileDetails);

  const supabase = createClient();
  useEffect(() => {
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profile",
        },
        (payload) => {
          setUserDetails({
            profile_id: payload.new.profile_id,
            image_url: payload.new.image_url,
            first_name: payload.new.first_name,
            last_name: payload.new.last_name,
            email: payload.new.email,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className=" grid place-items-center gap-4 grid-cols-1">
      {userDetails?.image_url ? (
        <div className="rounded-full overflow-hidden">
          <Image
            src={userDetails?.image_url}
            alt="User Image"
            width={96}
            height={96}
          />
        </div>
      ) : (
        <Placeholder variant="imageHolder" />
      )}
      <div className="  text-center">
        {userDetails?.first_name ? (
          <p className=" max-w-60 text-lg font-semibold text-main-grey-dark truncate">
            {userDetails?.first_name} {userDetails?.last_name}
          </p>
        ) : (
          <Placeholder variant="nameHolder" />
        )}
        {userDetails?.email ? (
          <p className=" max-w-60 truncate text-sm text-main-grey">
            {userDetails?.email}
          </p>
        ) : (
          <Placeholder variant="emailHolder" />
        )}
      </div>
    </div>
  );
};

export default PhoneLinksUserDetails;
