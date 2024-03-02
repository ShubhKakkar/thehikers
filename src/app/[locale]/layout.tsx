import type { Metadata } from "next";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import './globals.css';
import LayoutProvider from "../providers/LayoutProvider";
import CursorProvider from "../providers/CursorProvider";

export const metadata: Metadata = {
    title: "thehikers",
    description: "Architecting Innovation, Crafting Excellence: Your Premier Software Design and Development Partner",
};

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} >
            <body className={`bg-zinc-200 text-gray-900`}>
                <LayoutProvider>
                    <CursorProvider>
                        <Header />
                        {children}
                        <Footer />
                    </CursorProvider>
                </LayoutProvider>
            </body>
        </html>
    )
}