import { useState } from "react";
import { Link } from "wouter";
import { featuredProjects } from "../data/projects"; // adjust path to wherever projects.ts actually lives

function ProjectImage({ src, title }: { src?: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="w-full h-64 bg-gray-900 flex flex-col items-center justify-center text-gray-500">
        <svg
          className="w-10 h-10 mb-2 opacity-60"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs tracking-wide uppercase">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="w-full h-64 object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 tracking-wide uppercase">Projects</h2>
          <h3 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
            CODED EXPERIENCES, DESIGNED WITH INTENTION
          </h3>
          <p className="text-gray-600 max-w-2xl">
            From wireframes to deployable code, I lead projects through every phase—UX strategy, frontend UI, backend APIs, and database modeling. I've built full-stack applications using React, TypeScript, Node.js, PostgreSQL, and more, always ensuring design and function work seamlessly together.
            <br />
            Each project reflects a blend of creativity and code—responsive interfaces, scalable backends, and thoughtful user flows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl shadow-lg overflow-hidden">
              <ProjectImage src={project.image} title={project.title} />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-gray-900">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{project.category}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
                  >
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}