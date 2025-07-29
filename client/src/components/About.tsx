export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-semibold text-gray-600 mb-4 tracking-wide uppercase">About Me</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight text-gray-900">
              BUILDING END-TO-END DIGITAL SOLUTIONS
            </h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">From Concept to Code</h4>
              <p className="text-gray-600">I’m a full-stack developer with a design-first mindset—merging aesthetic precision with scalable, maintainable code. With roots in UI/UX and deep experience across the modern web stack, I build responsive, performant applications that solve real-world problems.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Developer with a Designer’s Eye</h4>
              <p className="text-gray-600">My background in design gives me a unique edge in crafting intuitive user experiences while engineering clean, efficient solutions under the hood.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Purpose-Driven Development</h4>
              <p className="text-gray-600">Whether it's a landing page, a complex SaaS app, or enterprise app, I focus on building meaningful products—balancing usability, performance, and business goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}