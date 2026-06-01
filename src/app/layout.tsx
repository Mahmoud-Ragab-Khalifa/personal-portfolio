import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Mahmoud Ragab Khalifa | Computer Engineer | Frontend Developer Building modern, scalable web applications with React, Next.js, Tailwind CSS, and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
