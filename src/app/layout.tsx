import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile, site } from "@/content";
import { palette } from "@/theme";
import "./globals.css";

// Self-hosted Latin subsets (from Google Fonts, SIL Open Font License).
const fraunces = localFont({
  src: "../fonts/fraunces-500-latin.woff2",
  weight: "500",
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-latin-var.woff2",
  weight: "400 600",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: palette.bg,
};

// Applies the saved theme and marks JS as available before first paint,
// so there is no theme flash and reveal animations never hide no-JS content.
const bootScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
