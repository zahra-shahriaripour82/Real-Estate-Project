import { Toaster } from "react-hot-toast";
import NextAuthPrivider from "@/providers/NextAuthProvider"
import { yekan } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthPrivider>

        <Layout>{children}</Layout>
        </NextAuthPrivider>
        <Toaster/>
      </body>
    </html>
  );
}
