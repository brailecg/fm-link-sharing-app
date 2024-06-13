import React, { useState } from "react";
import Image from "next/image";
import emailLogo from "../../../public/assets/email-icon.png";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LinkIcon from "../svg/LinkIcon";

const FormSchema = z.object({
  id: z.number(),
  website: z.string().min(1),
  linkString: z.string().url(),
});

type linkType = {
  id: number;
  website: string;
  linkString: string;
};

type formType = z.infer<typeof FormSchema>;

type FormLinkProps = {
  link: linkType;
  form: UseFormReturn<formType>;
  removeLink: (id: number) => void;
};

const Links = ({ link, form, removeLink }: FormLinkProps) => {
  const linksErrors = form?.formState?.errors;

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleOpenChange = () => {
    setIsSelectOpen((prev) => !prev);
  };
  return (
    <div key={link?.id}>
      <div className="flex justify-between">
        <p className=" text-main-grey font-semibold">= Link {link?.id}</p>
        <button onClick={() => removeLink(link.id)} className=" text-main-grey">
          Remove
        </button>
      </div>
      <FormField
        control={form.control}
        name="website"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className=" text-xs text-main-grey">
                Platform
              </FormLabel>
              <Select
                onOpenChange={handleOpenChange}
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={`text-main-grey 
                    ${
                      isSelectOpen
                        ? "outline-none border-main-purple  drop-shadow-input"
                        : ""
                    }`}>
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    className=" text-main-grey "
                    value="m@example.com">
                    <div className="flex space-x-2">
                      <Image src={emailLogo} alt="email logo" />
                      <span>m@example.com</span>
                    </div>
                  </SelectItem>
                  <SelectItem className=" text-main-grey " value="m@google.com">
                    <div className="flex space-x-2">
                      <Image src={emailLogo} alt="email logo" />
                      <span> m@google.com</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="linkString"
        render={({ field }) => (
          <FormItem>
            <FormLabel className=" text-xs text-main-grey">Link</FormLabel>
            <FormControl className="relative">
              <div>
                <Input placeholder="e.g. https://www.github.com" {...field} />
                <span className="absolute">
                  <LinkIcon width={20} height={20} pathFill="fill-[#737373]" />{" "}
                </span>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Links;
