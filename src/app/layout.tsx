import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/_components/_app/navbar";
import { inter } from "@/_libs/fonts";
import SidebarLH from "@/_components/_app/sidebar-lh";
import SidebarRH from "@/_components/_app/sidebar-rh";

export const metadata: Metadata = {
  title: "ashokasec/ui",
  description: "ashokasec/ui is a personal collection of UI components created by ashokasec. This open-source library includes reusable components used in real-world projects and websites. Explore, use, and contribute to the library!",
  keywords: "UI components, React components, open-source UI library, reusable components, ashokasec/ui, web development, front-end development, component library, ashokasec"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='max-w-[90rem] mx-auto flex relative'>
          <SidebarLH />
          <div className="w-full grid grid-cols-[59rem_auto]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
