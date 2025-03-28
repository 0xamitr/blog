import type { Metadata } from "next";
import {Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} font-slab antialiased`}>
        <main className="flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
