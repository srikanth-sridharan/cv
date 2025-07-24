import Image from "next/image"
import Link from "next/link"
import RESUME_DATA from "@/data/cv-data"
import { Github, Globe, Linkedin, Mail } from "lucide-react"

import SocialIcon from "./social-icon"
import { TypographyH3, TypographySmallMuted } from "./typography"

export default function ProfileHeader() {
  return (
    <section className="flex items-center justify-between gap-4 lg:gap-10 pb-3 border-b-4 border-dotted">
      <div className="flex flex-col flex-grow gap-y-1">
        <TypographyH3 className="font-bold">{RESUME_DATA.name}</TypographyH3>
        <TypographySmallMuted className="font-mono">
          {RESUME_DATA.description}
        </TypographySmallMuted>

        <Link href={RESUME_DATA.location.url} target="_blank">
          <TypographySmallMuted className="inline-flex font-mono text-xs hover:underline items-center gap-x-1">
            <Globe size={14} className="text-muted-foreground" />
            {RESUME_DATA.location.title}
          </TypographySmallMuted>
        </Link>

        <div className="flex items-center gap-x-3">
          <SocialIcon
            icon={Mail}
            href={RESUME_DATA.urls.mail}
            ariaLabel={`Email ${RESUME_DATA.name}`}
          />
          <SocialIcon
            icon={Linkedin}
            href={RESUME_DATA.urls.linkedin}
            ariaLabel={`${RESUME_DATA.name}'s LinkedIn profile`}
            externalHref
          />
          <SocialIcon
            icon={Github}
            href={RESUME_DATA.urls.github}
            ariaLabel={`${RESUME_DATA.name}'s GitHub profile`}
            externalHref
          />
        </div>
      </div>

      <div className="w-96 lg:w-40 overflow-hidden rounded-xl">
        <Image
          src="/avatar.webp"
          alt={RESUME_DATA.name}
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}
