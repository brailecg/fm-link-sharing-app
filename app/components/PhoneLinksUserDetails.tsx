"use client";
import React from "react";
import Placeholder from "../components/phone/Placeholder";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { ProfileDetailsType } from "../protected/protectedFileTypes";

import { useProfileDetails } from "../store";
import { updateProfileAction } from "@/utils/supabase/db_actions";

const PhoneLinksUserDetails = ({
  profileDetails,
}: {
  profileDetails: ProfileDetailsType;
}) => {
  const supabase = createClient();

  // const [userDetails, setUserDetails] = useState(profileDetails);

  const userDetails = useProfileDetails((state) => state.profileDetailsState);

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
      <div className=" flex flex-col items-center space-y-2  text-center">
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
