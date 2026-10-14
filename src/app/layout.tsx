import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Category from "./components/category";
import Marquee from "./components/marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin","bengali"],
});


export const metadata: Metadata = {
  title: "বাজার দর__আজকের বাজারের দাম",
  description: "বাজারের দাম",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-300">
        <Header></Header>
        <Category></Category>
        <Marquee></Marquee>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
