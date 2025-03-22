import { Link } from 'wouter';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#111827] py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-heading font-bold text-white flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('home');
              }}
            >
              <span className="text-[#8B5CF6]">AI</span>Portfolio
            </a>
            <p className="text-gray-400 mt-2">
              Crafting intelligent solutions with AI expertise.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('home');
              }}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('skills');
              }}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('about');
              }}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
