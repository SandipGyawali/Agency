import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "../components/Layout/BaseLayout";
import localFont from "next/font/local";

const alpino = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "semibold",
    },
    {
      path: "./fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agency Website",
  description: "Created By Sandip Gyawali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={alpino.variable}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
