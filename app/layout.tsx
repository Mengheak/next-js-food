import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "NextLavel Food",
  description: "Delicious meals, shared by a food-loving community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
