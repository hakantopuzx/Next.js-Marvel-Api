import type { Metadata } from "next";
import "../assets/global.scss"
import Header from "@/views/layout/header";

export const metadata: Metadata = {
    title: "Marvel Api",
    description: "Marvel Characters & Comics List",
    icons: "favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
