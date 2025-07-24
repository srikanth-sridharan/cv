import RESUME_DATA from "@/data/cv-data"
import { GraduationCap, Lightbulb, UserSearch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import Section from "@/components/section"
import {
  TypographyLarge,
  TypographyMedium,
  TypographySmallMuted,
} from "@/components/typography"

interface SkillSectionProps {
  title: string
  skills: string[]
}

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {title && (
        <TypographyLarge className="text-muted-foreground font-mono">
          {title}
        </TypographyLarge>
      )}

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge variant="outline" className="font-mono" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <section className="flex flex-col space-y-10">
      <Section
        title="About me"
        icon={<UserSearch className="text-muted-foreground" />}
      >
        <TypographySmallMuted className="font-mono mb-0">
          {RESUME_DATA.about}
        </TypographySmallMuted>
      </Section>

      <Section
        title="Education"
        icon={<GraduationCap className="text-muted-foreground" />}
      >
        {RESUME_DATA.education.map((education) => (
          <>
            <div className="flex flex-row justify-between">
              <TypographyLarge>{education.institution}</TypographyLarge>
              <TypographyLarge className="text-muted-foreground font-normal font-mono">
                {education.date}
              </TypographyLarge>
            </div>

            <TypographyMedium className="font-mono font-normal text-muted-foreground">
              {education.degree}
            </TypographyMedium>
          </>
        ))}
      </Section>

      <Section
        title="Skills"
        icon={<Lightbulb className="text-muted-foreground" />}
      >
        <div className="flex flex-col gap-y-6">
          {RESUME_DATA.skills.map((skill) => (
            <SkillSection
              key={skill.groupName}
              title={skill.groupName}
              skills={skill.skillTitles}
            />
          ))}
        </div>
      </Section>
    </section>
  )
}
