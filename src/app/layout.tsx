import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="size-full" lang="en">
      <body className={`size-full antialiased`}>
        <main className="size-full">{children}</main>
      </body>
    </html>
  );
}
