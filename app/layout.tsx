import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://mjsmith.tech";

export const metadata: Metadata = {
  title: "Zephyr Systems — AI Assistants for Hospitality Businesses",
  description:
    "We build AI chat assistants that handle bookings, orders and customer questions automatically. Built for hospitality and local businesses in Brisbane.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zephyr Systems — AI Assistants for Hospitality Businesses",
    description:
      "We build AI chat assistants that handle bookings, orders and customer questions automatically. Built for hospitality and local businesses in Brisbane.",
    url: SITE_URL,
    siteName: "Zephyr Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zephyr Systems — AI Assistants for Hospitality Businesses",
    description:
      "We build AI chat assistants that handle bookings, orders and customer questions automatically. Built for hospitality and local businesses in Brisbane.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
