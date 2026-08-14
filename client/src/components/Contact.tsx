import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegpvav"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 4000);
    } catch (err) {
      setSubmitError("Something went wrong — try emailing me directly instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, text: "andilemhlanga16@gmail.com", href: "mailto:andile@example.com" },
    { icon: Phone, text: "+27 83 929 5523", href: "tel:+27839295523" },
    { icon: MapPin, text: "Johannesburg, South Africa", href: null },
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/andile-mhlanga-370985316", label: "LinkedIn" },
    { icon: SiGithub, href: "https://github.com/andile593", label: "GitHub" },
    { icon: SiX, href: "https://x.com/andile_reeds", label: "X" }, 
  ];

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 mb-4 tracking-wide uppercase">Get In Touch</h2>
          <h3 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
            Let's Build Something Impactful
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project idea or looking for a developer who understands both the design and the code? Let's connect—I'm always open to building thoughtful, scalable digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-xl mb-6 text-gray-900">Send Message</h4>
            {submitMessage && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">{submitMessage}</p>
              </div>
            )}
            {submitError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">{submitError}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-xl mb-6 text-gray-900">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center space-x-4">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">{item.text}</span>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="block hover:opacity-75 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 text-gray-900">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}