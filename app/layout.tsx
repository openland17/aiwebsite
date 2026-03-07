import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://mjsconsulting.com.au";

export const metadata: Metadata = {
  title: "MJS Consulting — AI Automation for Business",
  description:
    "Custom AI tools and automation for construction, hospitality, and professional services. Based in Brisbane.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MJS Consulting — AI Automation for Business",
    description:
      "Custom AI tools and automation for construction, hospitality, and professional services. Based in Brisbane.",
    url: SITE_URL,
    siteName: "MJS Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJS Consulting — AI Automation for Business",
    description:
      "Custom AI tools and automation for construction, hospitality, and professional services. Based in Brisbane.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KC8HYD938V"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KC8HYD938V');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
