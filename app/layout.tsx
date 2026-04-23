import type { Metadata } from "next";
import { DM_Sans, Outfit, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

const SITE_URL = "https://mjs-consulting.com.au";
const SITE_TITLE =
  "MJS Consulting: Custom Software for Operations-Heavy Businesses";
const SITE_DESCRIPTION =
  "Custom operational software for construction, property, hospitality, and fitness & wellness businesses (gyms, studios, recovery centres). Shipped in 1 to 2 weeks. Brisbane-based, working with businesses across Australia.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "MJS Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
      className={`${dmSans.variable} ${outfit.variable} ${ibmPlexMono.variable}`}
    >
      <body className={`${dmSans.className} antialiased`}>
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
