import { Palette, Smartphone, Layers, Zap, Lock, Code2 } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiPrisma,
  SiPostman,
  SiVercel,
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Development",
    skills: [
      { name: "JavaScript / TypeScript", icon: SiTypescript },
      { name: "React, Redux", icon: SiReact },
      { name: "Node.js & Express", icon: SiNodedotjs },
      { name: "PostgreSQL, MongoDB, Prisma", icon: SiPostgresql },
      { name: "REST APIs, JWT Authentication", icon: Lock }
    ]
  },
  {
    title: "UI/UX DESIGN",
    skills: [
      { name: "Visual Design & Responsive layouts", icon: Palette },
      { name: "Wireframing & Prototyping", icon: Smartphone },
      { name: "Design Systems", icon: Layers },
      { name: "User Testing & Interaction Design", icon: Zap }
    ]
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Figma, Adobe XD", icon: SiFigma },
      { name: "Git & GitHub", icon: SiGit },
      { name: "VS Code", icon: Code2 },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Postman/RapidAPI", icon: SiPostman },
      { name: "Deployment: Vercel, Render, Netlify", icon: SiVercel },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 tracking-wide uppercase">Skills</h2>
          <h3 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
            FULL-STACK ENGINEERING MEETS USER-CENTERED DESIGN
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-xl mb-6 text-gray-900">{category.title}</h4>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}