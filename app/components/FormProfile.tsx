"use client";

import { useForm } from "react-hook-form";
import ProfileInput from "./formProfiles/ProfileInput";
import ProfileImage from "./formProfiles/ProfileImage";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProfileDetailsType,
  ProfileSchemaType,
} from "../protected/protectedFileTypes";
import { updateProfileAction } from "@/utils/supabase/db_actions";
import { useIsLoadingStore, useProfileDetails } from "../store";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export const profileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  profile_id: z.string(),
});

const FormProfile = ({
  profileDetails,
}: {
  profileDetails: ProfileDetailsType;
}) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const setIsLoadingState = useIsLoadingStore((state) => state.updateIsLoading);

  const setUserDetails = useProfileDetails(
    (state) => state.updateProfileDetailsArray
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof profileSchema>>({
    defaultValues: {
      firstName: profileDetails?.first_name,
      lastName: profileDetails?.last_name,
      email: profileDetails?.email,
      profile_id: profileDetails?.profile_id,
    },
    resolver: zodResolver(profileSchema),
  });

  async function onSubmit(data: ProfileSchemaType) {
    setBtnDisabled(true);
    const newDetails = await updateProfileAction(data);

    setUserDetails({
      ...profileDetails,
      first_name: newDetails?.first_name,
      last_name: newDetails?.last_name,
      email: newDetails?.email,
    });
    setBtnDisabled(false);
  }

  useEffect(() => {
    setIsLoadingState(false);
    setUserDetails(profileDetails);
  }, []);

  return (
    <>
      {btnDisabled && (
        <>
          <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <div>
        <div className=" space-y-6 grid grid-rows-[auto_1fr]">
          <ProfileImage profileImageURl={profileDetails?.image_url as string} />
          <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
            <div className=" bg-main-grey-light rounded-lg p-5 space-y-4">
              <input
                type="hidden"
                {...register("profile_id", {
                  required: "Can't be emtpy",
                })}
              />
              <ProfileInput
                label="First name*"
                htmlFor="firstName"
                placeholder="e.g. John"
                register={register}
                errorMessage={errors["firstName"]?.message?.toString()}
              />
              <ProfileInput
                label="Last name*"
                htmlFor="lastName"
                placeholder="e.g. Appleseed"
                register={register}
                errorMessage={errors["lastName"]?.message?.toString()}
              />
              <ProfileInput
                label="Email"
                htmlFor="email"
                placeholder="e.g. email@example.com"
                register={register}
                errorMessage={errors["email"]?.message?.toString()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormProfile;
