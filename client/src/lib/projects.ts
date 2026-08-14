export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  category: string;
  techStack: string[];
  buttonText: string;
  link: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Flaws",
    description:
      "Live e-commerce storefront for a premium streetwear brand based in Johannesburg — full-stack build with real-time courier tracking and order management.",
    longDescription:
      "Flaws is a fully operational e-commerce store for a Johannesburg-based streetwear brand, built and shipped to production. The build is split into a decoupled frontend and backend, giving room to scale catalog, checkout, and fulfillment independently. Features include real-time courier tracking, order management, and a storefront designed to hold up under real customer traffic — not a demo, a live business.",
    image: "/projects/flaws.png",
    category: "TypeScript · Full-Stack · Live Production",
    techStack: ["TypeScript", "React", "Node.js", "E-commerce"],
    buttonText: "Live Site",
    link: "https://flawswrldwide.com",
    featured: true,
  },
  {
    id: 1,
    title: "SecurePulse",
    description:
      "AI-integrated platform for commercial and industrial security clients, replacing traditional control rooms, manual patrols, and incident logging with automated monitoring.",
    longDescription:
      "SecurePulse was built for commercial and industrial security clients and is deployed through security firms. It replaces manual control-room workflows — patrols, call logging, incident tracking — with a single AI-integrated dashboard that surfaces alarms, call activity, and dispatch status in real time.",
    image: "/projects/securepulse.png",
    category: "TypeScript · Full-Stack",
    techStack: ["TypeScript", "React", "Node.js"],
    buttonText: "GitHub",
    link: "https://github.com/andile593/SecurePulse",
    featured: true,
  },
  {
    id: 2,
    title: "Zimba Moves",
    description:
      "Full-stack platform connecting customers with verified moving service providers across South Africa — from quote requests through to booking.",
    longDescription:
      "Zimba Moves connects customers with verified moving providers across South Africa. The platform handles the full journey — quote requests, provider comparison, and booking — streamlining a process that's traditionally scattered across calls and WhatsApp messages into one product.",
    image: "/projects/zimba-moves.png",
    category: "TypeScript · Full-Stack",
    techStack: ["TypeScript", "React", "Node.js"],
    buttonText: "GitHub",
    link: "https://github.com/Embakh-Solutions/Zimba-Moves",
    featured: true,
  },
  {
    id: 3,
    title: "EduGate",
    description:
      "School registration platform letting students apply to schools online, with schools surfaced by relevant location.",
    longDescription:
      "EduGate is a web-based school registration platform that lets students apply to schools online. Schools are surfaced based on the student's location, and the application walks through the registration flow end-to-end, built on the MERN stack.",
    image: "/projects/edugate.png",
    category: "React · Node.js · MERN",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    buttonText: "GitHub",
    link: "https://github.com/andile593/EduGate",
    featured: true,
  },
  {
    id: 4,
    title: "TechCare",
    description:
      "Medical dashboard displaying live patient data pulled from an external API, visualized with Chart.js.",
    longDescription:
      "TechCare is a medical dashboard that retrieves patient data from an external API and visualizes it with Chart.js, giving staff a fast, readable view of patient information without digging through raw records.",
    image: "/projects/techcare.png",
    category: "Node.js · Chart.js",
    techStack: ["Node.js", "Chart.js", "EJS"],
    buttonText: "GitHub",
    link: "https://github.com/andile593/TechCare",
    featured: true,
  },
  {
    id: 5,
    title: "Sparkles Sphere",
    description:
      "eCommerce platform for residential and commercial cleaning services, built end-to-end with Node.js.",
    longDescription:
      "Sparkles Sphere is an eCommerce platform for a cleaning services business, covering both residential and commercial clients. Built end-to-end with Node.js and EJS templating, it handles service listings and customer requests for the brand.",
    image: "/projects/sparkles-sphere.png",
    category: "Node.js · EJS",
    techStack: ["Node.js", "EJS"],
    buttonText: "GitHub",
    link: "https://github.com/andile593/Sparkles-Sphere-website-",
    featured: false,
  },
  {
    id: 6,
    title: "WhatsApp Shift Reporting Tool",
    description:
      "Python automation that captures screenshots from an operational monitoring system and delivers them to a WhatsApp group on a schedule.",
    longDescription:
      "A Python-based automation system built to remove a manual reporting chore: it captures screenshots from an operational monitoring system and sends them to a specified WhatsApp group at scheduled times via WhatsApp Web — turning a repetitive shift-handover task into a scheduled background job.",
    image: "/projects/whatsapp-tool.png",
    category: "Python · Automation",
    techStack: ["Python", "Automation", "WhatsApp Web"],
    buttonText: "GitHub",
    link: "https://github.com/andile593/WhatsApp-Shift-Reporting-Tool",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);