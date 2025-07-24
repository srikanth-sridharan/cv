import RESUME_DATA from "@/data/cv-data"
import { ScrollText } from "lucide-react"

import Section from "@/components/section"
import Timeline from "@/components/timeline"

export default function Contact() {
  return (
    <Section
      title="Work experience"
      icon={<ScrollText className="text-muted-foreground" />}
    >
      <div className="p-2">
        <Timeline
          items={RESUME_DATA.workExperience.map((x) => {
            return {
              title: x.company,
              subtitle: x.position,
              time: x.time,
              descriptionList: x.duties,
              current: x.current,
            }
          })}
        />
      </div>
    </Section>
  )
}
