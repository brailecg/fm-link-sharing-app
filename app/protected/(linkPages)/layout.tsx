"use server";
import Nav from "../../components/Nav";
export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr] max-w-[1440px] sm:p-6 mx-auto w-full">
      <Nav />
      {children}
    </div>
  );
}
