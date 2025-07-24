import { ReactNode } from "react"

import { TypographyH3 } from "./typography"

export default function Section({
  children,
  title,
  icon,
}: {
  children: React.ReactNode
  title: string
  icon: ReactNode
}) {
  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-2">
        {icon}
        <TypographyH3 className="font-bold">{title}</TypographyH3>
      </div>

      <div>{children}</div>
    </section>
  )
}
