"use client";
import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import SelectPlatform from "./formLinks/SelectPlatform";
import LinkInput from "./formLinks/LinkInput";
import { LsaGhSvg } from "./formLinks/icons";
import getStarted from "../../public/assets/get-started.png";

export const linkSchema = z.object({
  website: z.object({ id: z.number(), name: z.string(), icon: z.any() }),
  linkString: z.string().url(),
});

export const FormSchema = z.object({
  links: linkSchema.array(),
});

const FormLinks = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "links",
    control,
  });

  const handleSetLinks = () => {
    append({
      website: { id: 1, name: "Github", icon: <LsaGhSvg /> },
      linkString: "",
    });
  };

  const removeLink = (id: number) => {
    remove(id);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ errors });
    console.log({ data });
  }

  return (
    <div
      className={`space-y-6  ${
        fields.length === 0 ? "grid grid-rows-[auto_1fr]" : ""
      } `}>
      <button
        onClick={handleSetLinks}
        className="border border-main-purple rounded-lg w-full text-main-purple text-sm font-semibold h-11 hover:bg-main-purple-light">
        + Add new link
      </button>

      <form className="" id="link-form" onSubmit={handleSubmit(onSubmit)}>
        {fields.length > 0 &&
          fields.map((field, index) => {
            return (
              <div
                key={field?.id}
                className=" bg-main-grey-light p-4 rounded-lg space-y-3 mb-4">
                <div className="flex justify-between">
                  <p className=" text-main-grey font-semibold">
                    = Link {index + 1}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className=" text-main-grey">
                    Remove
                  </button>
                </div>
                <div>
                  <SelectPlatform control={control} index={index} />
                </div>
                <div>
                  <LinkInput
                    index={index}
                    name={`links.${index}.linkString`}
                    label="Link"
                    type="string"
                    register={register}
                    errorMessage={errors?.links?.[
                      index
                    ]?.linkString?.message?.toString()}
                  />
                </div>
              </div>
            );
          })}
      </form>

      {fields.length === 0 && (
        <div className=" flex flex-col justify-center items-center  bg-main-grey-light rounded-lg space-y-6 sm:space-y-10 p-4 sm:p-0">
          <Image src={getStarted} alt="get-started" />
          <h3 className="font-bold text-2xl text-main-grey-dark">
            Let's get you started
          </h3>
          <p className=" text-main-grey max-w-[488px] text-center">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We're here to help you
            share your profiles with everyone!
          </p>
        </div>
      )}
    </div>
  );
};

export default FormLinks;
