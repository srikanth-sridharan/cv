import * as motion from "framer-motion/client"
import { FileCode, Rocket } from "lucide-react"

import Section from "@/components/section"
import { TypographyH3 } from "@/components/typography"

export default function Projects() {
  return (
    <Section
      title="My projects"
      icon={<FileCode className="text-muted-foreground" />}
    >
      <div className="flex flex-col p-8 mt-4 items-center gap-5 border rounded">
        <motion.div
          initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          animate={{
            x: [0, 1, -2, 0],
            y: [0, -2, 2, 0],
            rotate: [0, 2, -2, -1],
            scale: [1, 1.01, 1.03, 1.01],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Rocket size={96} className="text-muted-foreground" />
        </motion.div>

        <TypographyH3 className="!font-mono text-center">
          Big things are brewing, stay tuned!
        </TypographyH3>
      </div>
    </Section>
  )
}
