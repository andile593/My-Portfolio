import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Am.</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors w-fit"
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}