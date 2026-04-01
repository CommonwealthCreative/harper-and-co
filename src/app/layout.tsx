import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harper & Co. Weddings | Luxury Wedding Planning",
  description:
    "Harper & Co. creates timeless, unforgettable celebrations tailored to your unique vision. Schedule your free consultation today.",
  openGraph: {
    title: "Harper & Co. Weddings | Luxury Wedding Planning",
    description:
      "Your love story, beautifully planned. Full-service wedding planning, partial planning, and day-of coordination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
