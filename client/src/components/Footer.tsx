import { Link } from 'wouter';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f17] to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <a 
              href="#home" 
              className="text-2xl font-heading font-bold text-white flex items-center gap-1"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('home');
              }}
            >
              <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">Dev</span>
              <span className="text-white">Portfolio</span>
            </a>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Building elegant, high-performance solutions with cutting-edge technologies.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-black/50 hover:bg-primary/20 border border-gray-800 hover:border-primary/50 flex items-center justify-center transition-all shadow-lg hover:shadow-primary/5" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white text-lg hover:text-primary transition-colors"></i>
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-black/50 hover:bg-[#0EA5E9]/20 border border-gray-800 hover:border-[#0EA5E9]/50 flex items-center justify-center transition-all shadow-lg hover:shadow-[#0EA5E9]/5" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-white text-lg hover:text-[#0EA5E9] transition-colors"></i>
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-black/50 hover:bg-[#8B5CF6]/20 border border-gray-800 hover:border-[#8B5CF6]/50 flex items-center justify-center transition-all shadow-lg hover:shadow-[#8B5CF6]/5" 
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-white text-lg hover:text-[#8B5CF6] transition-colors"></i>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-5">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('home');
                  }}
                >
                  <span className="h-1 w-3 bg-primary/40 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('projects');
                  }}
                >
                  <span className="h-1 w-3 bg-[#0EA5E9]/40 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('skills');
                  }}
                >
                  <span className="h-1 w-3 bg-primary/40 rounded-full"></span>
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('about');
                  }}
                >
                  <span className="h-1 w-3 bg-[#0EA5E9]/40 rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('contact');
                  }}
                >
                  <span className="h-1 w-3 bg-primary/40 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-5">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-lg text-[#0EA5E9] text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg text-[#8B5CF6] text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-lg text-[#0EA5E9] text-sm">
                Docker
              </span>
              <span className="px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg text-[#8B5CF6] text-sm">
                Kubernetes
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm">
                GraphQL
              </span>
              <span className="px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-lg text-[#0EA5E9] text-sm">
                Tailwind
              </span>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:contact@techportfolio.com" className="hover:text-primary transition-colors">
                  contact@techportfolio.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-phone text-[#0EA5E9]"></i>
                <a href="tel:+1555-123-4567" className="hover:text-[#0EA5E9] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-map-marker-alt text-[#8B5CF6]"></i>
                <span>San Francisco, California</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          
          <p className="text-gray-600 text-sm mt-3 md:mt-0">
            Built with <span className="text-primary">❤</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
