import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const iranSansFont = localFont({ src: "./fonts/IRANSans/IRANSans_Medium.ttf" });
export const metadata: Metadata = {
  title: "اتاق چت",
  description: "اتاق چت مصطفی انتظامی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en">
      <body className={iranSansFont.className}>{children}</body>
    </html>
  );
}
