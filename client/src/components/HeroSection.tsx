import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center hero-gradient border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pt-24 sm:pt-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex flex-col gap-6 text-center md:text-left flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium inline-flex gap-2 items-center mx-auto md:mx-0">
              <span className="h-px w-6 bg-primary"></span>
              FULL-STACK ENGINEER & SYSTEM ARCHITECT
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Crafting <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">powerful</span> digital<br className="hidden md:block"/> experiences
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              Senior software engineer with expertise in high-performance systems, modern web applications, and technical leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-base"
                onClick={() => scrollToSection('projects')}
              >
                EXPLORE MY WORK <i className="fas fa-arrow-right"></i>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent text-white border border-white/20 hover:border-white/50 px-6 py-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base"
                onClick={() => scrollToSection('contact')}
              >
                <i className="fas fa-envelope"></i> GET IN TOUCH
              </Button>
            </div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl font-heading font-bold text-white">8+</span>
                <span className="text-gray-400">Years<br/>Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-heading font-bold text-white">40+</span>
                <span className="text-gray-400">Projects<br/>Delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-heading font-bold text-white">15+</span>
                <span className="text-gray-400">Tech<br/>Stacks</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative md:w-1/3 flex items-center justify-center order-first md:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* This is a placeholder for user's image. User will provide their own image later */}
            <div className="h-[320px] w-[320px] rounded-full bg-gradient-to-br from-primary/20 to-primary/50 p-1">
              <div className="h-full w-full rounded-full flex items-center justify-center bg-black/80 overflow-hidden">
                <p className="text-white text-center px-8">Your image will be placed here</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute w-full h-full rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
            <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary"></div>
            <div className="absolute -bottom-2 left-6 h-5 w-5 rounded-full bg-[#0EA5E9]"></div>
          </motion.div>
        </div>
        
        <div className="absolute flex bottom-10 right-10 gap-6 text-gray-400 text-xl hidden md:flex">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 text-gray-400 text-sm flex flex-col items-center"
        style={{ transform: 'translateX(-50%)' }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
      >
        <span>Scroll down</span>
        <i className="fas fa-chevron-down mt-2"></i>
      </motion.div>
    </section>
  );
};

export default HeroSection;
