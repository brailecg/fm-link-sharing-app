import "./globals.css";
import { Instrument_Sans } from "next/font/google";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FM - Link Sharing App",
  description: "The fastest way to link with your peers",
};

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrument_sans.variable}>
      <body className=" bg-main-grey-light font-main-sans h-dvh">
        <main className="relative h-full w-full">{children}</main>
      </body>
    </html>
  );
}
