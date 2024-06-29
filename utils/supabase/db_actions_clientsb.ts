import { createClient } from "./client";

export async function uploadImageAvatar(avatarFile: File) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fileName = `${user?.id}`;
  console.log({ fileName });

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatarFile, {
      // replace the name 'avatar1.png' with user id
      cacheControl: "3600",
      upsert: true,
    });

  if (!error) {
    // update profile table with image url
    const { data } = supabase.storage.from("avatars").getPublicUrl(fileName);

    const { data: profile, error } = await supabase
      .from("profile")
      .update({ image_url: `${data?.publicUrl}?d=${Date.now()}` })
      .eq("profile_id", user?.id)
      .select();
  } else {
    console.log({ error });
  }
}
