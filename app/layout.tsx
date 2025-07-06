import type React from "react"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
   title: "Jummai Parker | Profile",
  description: "A prolifict writer with many books in her name",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
