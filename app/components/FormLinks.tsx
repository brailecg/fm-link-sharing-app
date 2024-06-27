"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import SelectPlatform from "./formLinks/SelectPlatform";
import LinkInput from "./formLinks/LinkInput";
import { LsaFbSvg, LsaGhSvg, LsaLiSvg, LsaYtSvg } from "./formLinks/icons";
import getStarted from "../../public/assets/get-started.png";
import {
  FormSchemaType,
  LinkDataType,
  FormSchema,
} from "../protected/protectedFileTypes";
import { linkListActions } from "@/utils/supabase/db_actions";
import { useLinkDataStore } from "../store";

export const linkIconObj: {
  [key: string]: JSX.Element;
} = {
  github: <LsaGhSvg />,
  youtube: <LsaYtSvg />,
  linkedin: <LsaLiSvg />,
  facebook: <LsaFbSvg />,
};

const FormLinks = ({ linkData }: { linkData: LinkDataType[] | undefined }) => {
  const updateDataLinks = useLinkDataStore(
    (state) => state.updateLinkDataArray
  );

  useEffect(() => {
    updateDataLinks(linkData);
  }, []);

  const [linksToDeleteArray, setLinksToDeleteArray] = useState<string[]>([]);

  const setDefaultValues =
    linkData !== undefined
      ? linkData?.map((link) => {
          return {
            link_id: link?.link_id,
            website: {
              id: link?.website,
              name: link?.website,
            },
            linkString: link?.url,
          };
        })
      : [];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: { links: setDefaultValues },
  });

  const { fields, append, remove } = useFieldArray({
    name: "links",
    control,
  });

  const handleSetLinks = () => {
    append({
      link_id: "new",
      website: {
        id: "github",
        name: "Github",
      },
      linkString: "",
    });
  };

  const removeLink = (id: number, fieldId: string) => {
    if (fieldId !== "new")
      setLinksToDeleteArray(linksToDeleteArray.concat([fieldId]));

    remove(id);
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const linkDataRes: LinkDataType[] = await linkListActions(
      data,
      linksToDeleteArray
    );

    const newFieldValues = linkDataRes.map((link) => {
      return {
        link_id: link?.link_id,
        website: {
          id: link?.website,
          name: link?.website,
        },
        linkString: link?.url,
      };
    });
    setValue("links", newFieldValues);
    updateDataLinks(linkDataRes);
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
          fields?.map((field, index) => {
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
                    onClick={() => removeLink(index, field?.link_id || "")}
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
