import {
  TypographyH4,
  TypographyLarge,
  TypographyMedium,
  TypographySmallMuted,
} from "./typography"
import { Badge } from "./ui/badge"

interface TimelineItem {
  title: string
  subtitle?: string
  time?: string
  description?: string
  descriptionList?: string[]
  badges?: string[]
  current?: boolean
}

function TimelineDot({ current }: { current?: boolean }) {
  return (
    <>
      <div
        className={`${current ? "bg-primary animate-ping" : "bg-muted-foreground/65"} aspect-square w-3 rounded-full absolute -left-[29.5px] z-10 top-2`}
      />

      {current && (
        <div className="bg-primary aspect-square w-3 rounded-full absolute -left-[29.5px] z-10 top-2" />
      )}
    </>
  )
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="relative grid gap-10 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20">
      {items.map((item, index) => (
        <li
          className="grid gap-1 text-sm relative"
          key={`timeline-item-${index}`}
        >
          <TimelineDot current={item.current} />

          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <TypographyH4>{item.title}</TypographyH4>

            <TypographyLarge className="text-muted-foreground font-normal font-mono">
              {item.time}
            </TypographyLarge>
          </div>

          <div className="flex flex-col gap-y-3">
            {item.subtitle && (
              <TypographyMedium className="font-normal font-mono">
                {item.subtitle}
              </TypographyMedium>
            )}

            {item.description && (
              <TypographySmallMuted className="font-mono">
                {item.description}
              </TypographySmallMuted>
            )}

            {item.badges && (
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badgeText, index) => (
                  <Badge
                    variant="outline"
                    className="font-mono"
                    key={`description-${index}`}
                  >
                    {badgeText}
                  </Badge>
                ))}
              </div>
            )}

            {item.descriptionList && (
              <ul className="list-disc ml-5">
                {item.descriptionList.map((description, index) => (
                  <li className="list-item" key={`description-${index}`}>
                    <TypographySmallMuted className="font-mono mb-0">
                      {description}
                    </TypographySmallMuted>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
