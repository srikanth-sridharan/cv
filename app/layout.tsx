import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import "./globals.css"

import RESUME_DATA from "@/data/cv-data"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import NavBar from "@/components/nav-bar"
import ProfileHeader from "@/components/profile-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypographyH3 } from "@/components/typography"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: RESUME_DATA.siteMetadata.title,
  description: RESUME_DATA.siteMetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container relative mx-auto scroll-my-12 p-4 md:p-8">
            <section className="md:mx-auto w-full max-w-3xl">
              <div className="flex justify-between items-center border-b-4 border-dotted mb-2 pb-2.5">
                <Logo />
                <ThemeToggle />
              </div>

              <ProfileHeader />
              <NavBar />

              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
