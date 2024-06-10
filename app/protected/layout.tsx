"use server";
import Nav from "../components/Nav";
export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-main-grey-light sm:p-6 min-w-full min-h-dvh border border-red-500 grid grid-cols-1">
      <Nav />
      {/* <main className="min-h-screen flex flex-col items-center">
        {children}
      </main> */}
    </div>
  );
}
