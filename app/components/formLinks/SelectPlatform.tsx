import { ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import { z } from "zod";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { LsaFbSvg, LsaGhSvg, LsaLiSvg, LsaYtSvg } from "./icons";

type PlatformListType = {
  links: {
    id: number;
    name: string;
    icon: ReactNode;
  }[];
};

const platformList: PlatformListType = {
  links: [
    { id: 1, name: "Github", icon: <LsaGhSvg /> },
    { id: 2, name: "Youtube", icon: <LsaYtSvg /> },
    { id: 3, name: "LinkedIn", icon: <LsaLiSvg /> },
    { id: 4, name: "Facebook", icon: <LsaFbSvg /> },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Define the type that matches your schema
const linkSchema = z.object({
  website: z.object({ id: z.number(), name: z.string(), icon: z.any() }),
  linkString: z.string().url(),
});

const FormSchema = z.object({
  links: linkSchema.array(),
  // id: z.number(),
  // website: z.object({ id: z.number(), name: z.string(), icon: z.any() }),
  // linkString: z.string().url(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function SelectPlatform({
  control,
}: {
  control: Control<FormValues>;
}) {
  return (
    <Controller
      name="links"
      control={control}
      rules={{ required: true }}
      defaultValue={platformList.links[0]}
      render={({ field: { value, onChange } }) => (
        <Listbox value={value} onChange={onChange}>
          {({ open }) => {
            return (
              <>
                <Label className="block text-xs text-main-grey">Platform</Label>
                <div className="relative mt-1">
                  <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12">
                    <span className="truncate flex items-center space-x-2">
                      {value?.icon}
                      <span>{value?.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <Transition
                    show={open}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {platformList.links.map((platform) => (
                        <ListboxOption
                          key={platform.id}
                          className={({ focus }) =>
                            classNames(
                              focus ? "bg-indigo-600 text-white" : "",
                              !focus ? "text-gray-900" : "",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={platform}>
                          {({ selected }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "flex items-center space-x-2 truncate"
                                )}>
                                {platform?.icon}
                                <span> {platform.name}</span>
                              </span>
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              </>
            );
          }}
        </Listbox>
      )}
    />
  );
}
