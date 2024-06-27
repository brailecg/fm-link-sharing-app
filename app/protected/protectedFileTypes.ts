import { z } from "zod";

const profileDetails = z.object({
  profile_id: z.string(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  image_url: z.string(),
});

export type ProfileDetailsType = z.infer<typeof profileDetails> | undefined;

const linkData = z.object({
  link_id: z.string().optional(),
  website: z.string(),
  url: z.string(),
  profile_id: z.string().optional(),
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
  link_id: z.string().optional(),
  website: platformList,
  linkString: z.string().url(),
});

export const FormSchema = z.object({
  links: linkSchema.array(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

const profileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  profile_id: z.string(),
});

export type ProfileSchemaType = z.infer<typeof profileSchema>;
