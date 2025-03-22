import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

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
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
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
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="text-white hover:text-[#8B5CF6] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <Button 
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all"
          onClick={() => handleNavLinkClick('contact')}
        >
          Get in Touch
        </Button>
        
        <Button 
          variant="ghost" 
          className="md:hidden text-white p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-[#111827] bg-opacity-95 nav-blur border-b border-gray-700 py-4 px-4 md:hidden animate-in fade-in`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="text-white hover:text-[#8B5CF6] transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all text-center mt-2"
            onClick={() => handleNavLinkClick('contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
