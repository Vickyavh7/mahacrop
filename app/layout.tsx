import type React from "react"
import type { Metadata, Viewport } from "next"
import { Big_Shoulders_Display, Figtree, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { AppWrapper } from "@/components/app-wrapper"

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
})

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
})

const lot = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-lot",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Mahacrop Agrofoods LLP — IQF from Shirur",
  description:
    "IQF frozen vegetables, fruits, and pulps held at −18 °C from Wadhu Bk, Pune to ports worldwide.",
  keywords: "frozen foods, IQF, agriculture, export, mahacrop, agrofoods, Pune",
  metadataBase: new URL("https://mahacrop.com"),
  openGraph: {
    title: "Mahacrop Agrofoods LLP — IQF from Shirur",
    description: "Held at −18 °C from Wadhu Bk farms to your port. Frozen vegetables, fruits, and pulps.",
    url: "https://mahacrop.com",
    siteName: "Mahacrop Agrofoods LLP",
    locale: "en_IN",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#12382C",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${lot.variable} font-sans overflow-x-hidden bg-icefield text-ink`}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:bg-kernel focus:px-4 focus:py-2 focus:text-chamber"
        >
          Skip to content
        </a>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
