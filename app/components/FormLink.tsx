"use client";
import React, { useState } from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";

import Links from "./formLinks/Links";
import getStarted from "../../public/assets/get-started.png";

type linkType = {
  id: number;
  website: string;
  linkString: string;
}[];

const FormSchema = z.object({
  id: z.number(),
  website: z.string(),
  linkString: z.string().url(),
});

const FormLink = () => {
  const [links, setLinks] = useState<linkType>([]);

  const handleSetLinks = () => {
    setLinks([
      ...links,
      {
        id: links.length + 1,
        website: "",
        linkString: "",
      },
    ]);
  };

  const {
    formState: { errors },
  } = useForm();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const removeLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ data });
  }

  return (
    <div className=" space-y-6 grid grid-rows-[auto_1fr]">
      <button
        onClick={handleSetLinks}
        className="border border-main-purple rounded-lg w-full text-main-purple text-sm font-semibold h-11 hover:bg-main-purple-light">
        + Add new link
      </button>
      {links.length > 0 && (
        <Form {...form}>
          <form id="link-form" onSubmit={form.handleSubmit(onSubmit)}>
            {links.map((link) => {
              return (
                <Links
                  key={link?.id}
                  link={link}
                  form={form}
                  removeLink={removeLink}
                />
              );
            })}
          </form>
        </Form>
      )}
      {links.length === 0 && (
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

export default FormLink;
