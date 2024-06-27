"use server";

import { PostgrestResponse } from "@supabase/supabase-js";
import { createClient } from "./server";
import {
  ProfileDetailsType,
  FormSchemaType,
  LinkDataType,
  ProfileSchemaType,
} from "@/app/protected/protectedFileTypes";
import { revalidatePath } from "next/cache";

// there are no filter by user since it's already being filtered in the table RLS
export async function getProfileDetails(): Promise<
  ProfileDetailsType | undefined
> {
  const supabase = createClient();
  const { data, error }: PostgrestResponse<ProfileDetailsType> = await supabase
    .from("profile")
    .select(`profile_id, email, first_name, last_name, image_url, created_at`);
  if (error) {
    console.error("Error fetching profile details:", error);
    return undefined;
  }

  if (data && data.length > 0) return data[0];
}

export async function getAllLinks(): Promise<LinkDataType[] | undefined> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("link")
    .select(`link_id, url, website, link_color`)
    .order("created_at", { ascending: true });
  if (error) {
    console.error("Error fetching link details:", error);
    return undefined;
  }
  if (data && data.length > 0) return data;
}

export async function linkListActions(
  data: FormSchemaType,
  linksToDeleteArray: string[]
): Promise<LinkDataType[]> {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // delete
  if (linksToDeleteArray?.length > 0) {
    const response = await supabase
      .from("link")
      .delete()
      .in("link_id", linksToDeleteArray);
  }

  // insert and/or upsert
  let linkToInsertArray: LinkDataType[] = [];
  let linkToUpsertArray: LinkDataType[] = [];

  data?.links?.forEach((link) => {
    if (link?.link_id === "new") {
      // insert
      linkToInsertArray.push({
        profile_id: user?.id,
        website: link?.website?.id,
        url: link?.linkString,
      });
    } else {
      //upsert
      linkToUpsertArray.push({
        link_id: link?.link_id,
        profile_id: user?.id,
        website: link?.website?.id,
        url: link?.linkString,
      });
    }
  });

  let linkResponseArray: LinkDataType[] = [];

  if (linkToInsertArray.length > 0) {
    const { data: res, error } = await supabase
      .from("link")
      .insert(linkToInsertArray)
      .select();

    if (!error) {
      res?.forEach((link) => {
        linkResponseArray.push({
          profile_id: link?.profile_id,
          website: link?.website,
          url: link?.url,
          link_id: link?.link_id,
          created_at: link?.created_at,
        });
      });
    }
  }

  if (linkToUpsertArray.length > 0) {
    const { data: resUpsert, error } = await supabase
      .from("link")
      .upsert(linkToUpsertArray)
      .select();

    if (!error) {
      resUpsert?.forEach((link) => {
        linkResponseArray.push({
          profile_id: link?.profile_id,
          website: link?.website,
          url: link?.url,
          link_id: link?.link_id,
          created_at: link?.created_at,
        });
      });
    }
  }
  revalidatePath("/protected/(linkPages)/link/page");
  return linkResponseArray;
}

export async function updateProfileAction(userDetails: ProfileSchemaType) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profile")
    .update({
      first_name: userDetails?.firstName,
      last_name: userDetails?.lastName,
      email: userDetails?.email,
    })
    .eq("profile_id", userDetails?.profile_id)
    .select();
}
