"use server";
import Nav from "../components/Nav";
export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] max-w-[1440px] sm:p-6 mx-auto w-full">
      <Nav />
      <div className="h-full">{children}</div>
    </div>
  );
}
