interface ResumeData {
  siteMetadata: SiteMetadata,
  name: string
  description: string
  location: Location
  urls: Urls
  about: string
  education: Education[]
  skills: Skill[]
  workExperience: WorkExperience[]
}

interface Location {
  title: string
  url: string
}

interface Urls {
  mail: string
  github: string
  linkedin: string
}

interface Education {
  institution: string
  degree: string
  date: string
}

interface Skill {
  groupName: string
  skillTitles: string[]
}

interface WorkExperience {
  company: string
  position: string
  time: string
  current?: boolean
  duties: string[]
}

interface SiteMetadata {
  title: string
  description: string
}

const RESUME_DATA: ResumeData = {
  siteMetadata: {
    title: "Srikanth Sridharan - Full-stack Developer",
    description: "Srikanth Sridharan - Full-stack Developer",
  },
  name: "Srikanth Sridharan",
  description:
    "Experienced Full Stack Engineer with a keen eye for detail, focused on delivering high-quality products.",
  location: {
    title: "Chennai, India",
    url: "https://www.google.com/maps/place/chennai",
  },
  urls: {
    mail: "mailto:hello@srikanth.cv",
    github: "https://github.com/srikanth-sridharan",
    linkedin: "https://www.linkedin.com/in/devsrikanthsridharan",
  },
  about:
    "I'm a Full Stack Engineer with 10 years of commercial experience, specializing in the MERN stack (MongoDB, Express.js, React, Node.js) for robust web application development. My expertise extends to configuring GitLab CI/CD pipelines for streamlined, efficient deployments. As an experienced team lead, I thrive on collaboration and guiding projects to successful completion, always driven by a passion for exploring new technologies and staying ahead of industry trends.",
  education: [
    {
      institution: "Guru Nanak College",
      degree: "Bachelor's of Science degree in Visual Communication",
      date: "2012-2015",
    },
  ],
  skills: [
    {
      groupName: "Frontend",
      skillTitles: [
        "React / Next, Gatsby",
        "JavaScript",
        "TypeScript",
        "shadcn/ui",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      groupName: "Backend",
      skillTitles: [
        "Javascript",
        "Python / Django",
        "Node.js / Express",
        "MongoDB / Mongoose",
        "PostgreSQL",
        "CQRS",
      ],
    },
    {
      groupName: "Other",
      skillTitles: [
        "Github, Git, Gitlab CI/CD",
        "Prompt Engineering",
        "Docker",
        "Vercel Deployment",
        "Cypress",
      ],
    },
  ],
  workExperience: [
    {
      current: true,
      company: "Nvish Solutions | Databricks",
      position: "Senior Frontend Developer",
      time: "Feb 2023 - Present",
      duties: [
        "Translating **UI/UX Figma designs** into high-quality, responsive, and **accessible user interfaces** using **React** and **Gatsby**.",
        "Developing and optimizing reusable and performant **frontend components** within the Gatsby framework, ensuring optimal resource usage and a smooth developer experience.",
        "Collaborating with backend teams to integrate **GraphQL** and other **APIs**, ensuring seamless data flow and functionality for frontend components.",
        "Proactively designing and developing user interfaces that meet or exceed **WCAG Level AA accessibility standards** with a focus on **Level Access tasks**.",
        "Managing codebase and development workflows using **Git** and **GitHub** for version control, code reviews, and maintaining a robust frontend codebase.",
        "Leading and mentoring a small team of frontend developers, including **assigning tasks in Jira**, conducting thorough code reviews, and fostering their professional growth.",
        "Configuring and overseeing **CI/CD pipelines** specifically for frontend deployments, ensuring efficient and reliable release cycles.",
      ],
    },
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      time: "Jun 2015 - Nov 2023",
      duties: [
        "Configuring and overseeing **CI/CD pipelines** specifically for frontend deployments, ensuring efficient and reliable release cycles.",
        "Working as a freelancer, setting up **WordPress sites** and coding them from scratch using **CodeIgniter**.",
        "Hosting client websites on **VPS**.",
        "Performing **React frontend designs** for clients from **Australia, the US, and the UK** sourced through **freelancer.com**, until the COVID-19 pandemic.",
      ],
    },
  ],
}

export default RESUME_DATA
