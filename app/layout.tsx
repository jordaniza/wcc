import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "West Coast Chiropractic",
  description: "Dr. Kristian Frantzen - Move Better. Feel Stronger. Stay Healthier. Live Pain-Free.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>{/* Leaflet CSS will be loaded client-side */}</head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'