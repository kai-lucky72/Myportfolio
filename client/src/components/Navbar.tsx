import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <a 
          href="#home" 
          className="text-xl font-heading font-bold text-white flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('home');
          }}
        >
          <span className="text-primary text-2xl">DEV</span>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-bold">PORTFOLIO</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="text-sm font-semibold text-gray-300 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-6 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all text-sm"
            onClick={() => handleNavLinkClick('contact')}
          >
            GET IN TOUCH
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          className="md:hidden text-white p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } fixed inset-0 top-16 bg-black/95 backdrop-blur-lg flex-col justify-center items-center z-40 md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="text-xl font-bold text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col items-center gap-5">
            <ThemeToggle className="mt-2" />
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-5 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all text-center w-40"
              onClick={() => handleNavLinkClick('contact')}
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-20 flex gap-8 text-gray-400 text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
