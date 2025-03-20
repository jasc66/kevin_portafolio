import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider-simple"

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinilama.com"),
  title: "Kevin Ilama Portuguez | Data Engineer",
  description:
    "Professional portfolio of Kevin Ilama Portuguez, Data Engineer specializing in SQL, Power BI, and data integration solutions.",
  keywords: "Kevin Ilama Portuguez, Data Engineer, SQL, Power BI, ETL, Data Integration, Portfolio",
  authors: [{ name: "Kevin Ilama Portuguez" }],
  openGraph: {
    title: "Kevin Ilama Portuguez | Data Engineer",
    description:
      "Professional portfolio of Kevin Ilama Portuguez, Data Engineer specializing in SQL, Power BI, and data integration solutions.",
    url: "https://kevinilama.com",
    siteName: "Kevin Ilama Portuguez Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin.jpg-3FZmo8zITF2rYiuzWowplqrp7wcuHh.jpeg",
        width: 1200,
        height: 630,
        alt: "Kevin Ilama Portuguez - Data Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>{/* Removed PreloadAssets component */}</head>
      <body className={inter.className}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>

        {/* Load non-critical scripts with defer */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}

