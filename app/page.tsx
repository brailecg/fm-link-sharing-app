import { redirect } from "next/navigation";
// TODO: create landing page for the app
export default async function Index() {
  redirect("/login");
}
