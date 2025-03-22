import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center hero-gradient border-b border-white/5">
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#8B5CF6] font-medium inline-flex gap-2 items-center mx-auto md:mx-0">
              <span className="h-px w-6 bg-[#8B5CF6]"></span>
              AI Engineer & ML Specialist
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Building <span className="text-primary animate-pulse">intelligent</span> solutions<br className="hidden md:block"/> for complex problems
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              Experienced AI engineer with expertise in machine learning, deep learning, and NLP. Ready to contribute to your next AI hackathon or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                onClick={() => scrollToSection('projects')}
              >
                View Projects <i className="fas fa-arrow-right"></i>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                onClick={() => scrollToSection('about')}
              >
                <i className="fas fa-file-alt"></i> Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-wrap gap-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-heading font-bold text-white">5+</span>
              <span className="text-gray-400">Years<br/>Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-heading font-bold text-white">20+</span>
              <span className="text-gray-400">Projects<br/>Completed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-heading font-bold text-white">10+</span>
              <span className="text-gray-400">Hackathons<br/>Won</span>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute flex bottom-10 right-10 gap-6 text-gray-400 text-lg hidden md:flex">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
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
