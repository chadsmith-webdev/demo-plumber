import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema } from "@/lib/schema";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `Ozark Plumbing Co. | Licensed Plumber in Springdale, AR | 24/7 Emergency`,
    template: `%s | Ozark Plumbing Co.`,
  },
  description: BUSINESS.description,
  keywords: [
    "plumber Springdale AR",
    "emergency plumber NW Arkansas",
    "plumber near me",
    "water heater replacement Rogers AR",
    "drain cleaning Fayetteville",
    "emergency plumber Bentonville",
    "licensed plumber Arkansas",
    "24/7 plumbing service",
  ],
  authors: [{ name: BUSINESS.owner }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    title: `Ozark Plumbing Co. | Licensed Plumber in Springdale, AR`,
    description: BUSINESS.description,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ozark Plumbing Co. — NW Arkansas Licensed Plumber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ozark Plumbing Co. | Licensed Plumber in Springdale, AR`,
    description: BUSINESS.description,
    images: ["/images/hero-bg.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = buildLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
