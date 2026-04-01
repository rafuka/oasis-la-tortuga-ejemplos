import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oasis La Tortuga",
  description: "Landing examples from the Oasis La Tortuga Stitch project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
