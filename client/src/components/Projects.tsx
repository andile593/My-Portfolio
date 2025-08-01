const projects = [
  {
    id: 1,
    title: "Tag Along App",
    description: "A comprehensive travel companion app offering seamless booking experiences and intelligent trip planning through innovative UX design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "Mobile App Design",
    buttonText: "Prototype"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Enterprise-level data visualization platform focusing on intuitive information architecture and user-centered design principles.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "Web Application",
    buttonText: "Live Site"
  }
];

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
            From wireframes to deployable code, I lead projects through every phase—UX strategy, frontend UI, backend APIs, and database modeling. I’ve built full-stack applications using React, TypeScript, Node.js, PostgreSQL, and more, always ensuring design and function work seamlessly together.
            <br/>
              Each project reflects a blend of creativity and code—responsive interfaces, scalable backends, and thoughtful user flows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-gray-900">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{project.category}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                    {project.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}