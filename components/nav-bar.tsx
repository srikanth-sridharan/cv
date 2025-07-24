"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "./ui/button"

function NavBarButton({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  const pathName = usePathname()

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: pathName === href ? "default" : "outline",
        size: "sm",
      })}
    >
      {children}
    </Link>
  )
}

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 mt-4 mb-8">
      <NavBarButton href="/">About</NavBarButton>
      <NavBarButton href="/career">Career</NavBarButton>
      <NavBarButton href="/projects">Projects</NavBarButton>
    </nav>
  )
}
