import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./styles/globals.css";


const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michał Romak - portfolio",
  description: "Created with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body className ={`${inter.className}`}>{children}</body>
    </html>
      
  );
}
