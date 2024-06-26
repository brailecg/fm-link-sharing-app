import { z } from "zod";
import { ReactNode } from "react";

const profileDetails = z.object({
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  image_url: z.string(),
});

export type ProfileDetailsType = z.infer<typeof profileDetails> | undefined;

const linkData = z.object({
  link_id: z.string(),
  website: z.string(),
  link_color: z.string(),
  url: z.string(),
});

export type LinkDataType = z.infer<typeof linkData>;

export type LinkIconsType = {
  [key: string]: [JSX.Element, string];
};

export const platformList = z.object({
  id: z.string(),
  name: z.string(),
});

export type PlatformListType = z.infer<typeof platformList>[];

export const linkSchema = z.object({
  link_id: z.string(),
  website: platformList,
  linkString: z.string().url(),
});

export const FormSchema = z.object({
  links: linkSchema.array(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

// table data types
// 1. link table
export type LinkTableType = {
  link_id?: string;
  profile_id?: string;
  website: string;
  url: string;
};
