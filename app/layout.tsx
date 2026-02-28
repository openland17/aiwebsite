import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script
          id="voiceflow-chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '699e9db2e853fa16221d6ca7' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: 'https://runtime-api.voiceflow.com'
                    }
                  });
                };
                v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
                v.type = 'text/javascript';
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </body>
    </html>
  );
}
