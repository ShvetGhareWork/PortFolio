import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shvet's Portfolio",
  description: "Created with Dignity and Elegance",
  generator: "Shvet Ghare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
