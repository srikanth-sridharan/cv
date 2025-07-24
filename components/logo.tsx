"use client"

import { Pixelify_Sans as FontPixel } from "next/font/google"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { TypographyH3 } from "./typography"

const fontPixel = FontPixel({
  subsets: ["latin"],
  variable: "--font-pixel",
})

export default function Logo() {
  return (
    <TypographyH3 className={cn("text-foreground", fontPixel.className)}>
      srikanth.cv
      <span className="animation-blink text-foreground">_</span>
    </TypographyH3>
  )
}
