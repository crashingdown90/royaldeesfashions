import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaldeesfashion.com"),
  title: {
    default: "Royal Dees Fashion | Premium Elegance",
    template: "%s | Royal Dees Fashion"
  },
  description: "Discover the latest in high-end fashion, exclusive collections, and editorial trends at Royal Dees Fashion.",
  keywords: ["fashion", "luxury", "streetwear", "editorial", "haute couture", "style guide"],
  authors: [{ name: "Royal Dees Editorial Team" }],
  openGraph: {
    title: "Royal Dees Fashion | Premium Elegance",
    description: "Discover the latest in high-end fashion, exclusive collections, and editorial trends.",
    url: "https://royaldeesfashion.com",
    siteName: "Royal Dees Fashion",
    images: [
      {
        url: "/hero_fashion.png",
        width: 1200,
        height: 630,
        alt: "Royal Dees Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Dees Fashion | Premium Elegance",
    description: "Discover the latest in high-end fashion, exclusive collections, and editorial trends.",
    images: ["/hero_fashion.png"],
  },
  alternates: {
    canonical: "https://royaldeesfashion.com",
  },
  verification: {
    google: "6wq9oN747gTzQnBHzAHHPwItmED6QLHOn093c4_iFWc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <div className="page-transition-wrapper">
          {children}
        </div>
        <CookieBanner />
        <BackToTop />
        <footer className="site-footer">
          <div className="footer-links">
            <Link href="/about">About Us</Link>
            <Link href="/our-team">Our Team</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Royal Dees Fashion. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
