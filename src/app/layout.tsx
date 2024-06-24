import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Font to change
const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "",
  description: "",
};

// Layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${inter.className} h-full`}>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
