import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "./styles/globals.css";
import {ReactNode} from "react";
import StoreProvider from "@/app/redux/StoreProvider";


const inter = Rubik({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Michał Romak - portfolio",
    description: "Created with NextJS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html  lang="en">
        <StoreProvider>
            <body className={`${inter.className}`}>{children}</body>
        </StoreProvider>
        </html>

    );
}
