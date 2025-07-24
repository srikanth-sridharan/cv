import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { buttonVariants } from "./ui/button"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  ariaLabel?: string
  externalHref?: boolean
}

export default function SocialIcon(props: SocialIconProps) {
  const Icon = props.icon

  return (
    <Link
      href={props.href}
      target={props.externalHref ? "_blank" : undefined}
      aria-label={props.ariaLabel}
      className={`${buttonVariants({
        variant: "outline",
        size: "icon",
      })} h-8 w-8`}
    >
      <Icon size={18} className="text-muted-foreground" />
    </Link>
  )
}
