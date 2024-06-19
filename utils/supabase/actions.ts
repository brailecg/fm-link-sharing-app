import { createClient } from "./client";

export async function uploadImageAvatar(avatarFile: File) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload("avatar1.png", avatarFile, {
      // replace the name 'avatar1.png' with user id
      cacheControl: "3600",
      upsert: false,
    });
}
