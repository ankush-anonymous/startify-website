import type React from "react"
import type { Metadata } from "next"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "Startify - Canada's #1 Partner for CRM & Digital Innovation | Trusted IT Solutions",
    template: "%s | Startify - Digital Acceleration Experts",
  },
  description:
    "Trusted by 100+ Canadian Businesses. Startify is the fastest-growing IT agency in Canada, helping businesses scale smarter with reliable, scalable, and secure digital solutions. Everything you need under one roof.",
  keywords: [
    "Startify",
    "IT solutions Canada",
    "CRM solutions",
    "digital innovation",
    "business automation",
    "trusted IT agency",
    "Canadian businesses",
    "digital acceleration",
    "scalable IT solutions",
    "secure business technology",
    "fastest growing IT agency Canada",
    "business growth technology",
    "digital transformation Canada",
    "enterprise solutions",
    "cloud solutions Canada",
    "IT consulting services",
    "business process automation",
    "customer relationship management",
    "digital marketing solutions",
    "web development Canada",
  ],
  authors: [{ name: "Startify Team" }],
  creator: "Startify",
  publisher: "Startify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://startify.ca",
    siteName: "Startify",
    title: "Startify - Canada's #1 Partner for CRM & Digital Innovation",
    description:
      "Trusted by 100+ Canadian Businesses. Helping businesses scale smarter with reliable, scalable, and secure IT solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Startify - Digital Acceleration Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startify - Canada's #1 Partner for CRM & Digital Innovation",
    description: "Trusted by 100+ Canadian Businesses. Digital Acceleration Experts helping businesses scale smarter.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://startify.ca",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Startify",
              description: "Canada's #1 Partner for CRM & Digital Innovation",
              url: "https://startify.ca",
              logo: "https://startify.ca/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-STARTIFY",
                contactType: "customer service",
                areaServed: "CA",
                availableLanguage: ["English", "French"],
              },
              sameAs: ["https://linkedin.com/company/startify", "https://twitter.com/startify"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CA",
              },
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
                <Analytics />

      </body>
    </html>
  )
}
