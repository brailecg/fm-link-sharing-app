"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import ProfileInput from "./formProfiles/ProfileInput";
import ProfileImage from "./formProfiles/ProfileImage";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const profileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

const FormProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  function onSubmit(data: z.infer<typeof profileSchema>) {
    console.log({ errors });
    console.log({ data });
  }

  return (
    <div>
      <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
        <div className=" space-y-6 grid grid-rows-[auto_1fr]">
          <ProfileImage />
          <div className=" bg-main-grey-light rounded-lg p-5 space-y-4">
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
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
