import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { userInfo } from '@/lib/constants';
import ProfileImage from './ProfileImage';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0c1220]/60 to-black pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-primary font-medium tracking-wider">MY BACKGROUND</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-8 flex flex-col gap-1">
              <span>Engineering</span>
              <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Machine learning specialist and software engineer with experience in AI development since 2023. Participated in the prestigious Informatics of AI of Africa program (2024-2025), where I developed innovative ML solutions for real-world challenges. Currently developing backend systems at Prime Life Insurance.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Passionate about combining cutting-edge AI technologies with sound software engineering practices to create intelligent systems. Winner of the Cyberlympics competition in cyber security, with strong expertise in backend development and ethical hacking. My skills span machine learning, data analysis, cyber security, and full-stack development for creating powerful technical solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl">
                <h3 className="text-white font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="h-6 w-6 bg-primary/20 text-primary rounded-md flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-sm"></i>
                  </span>
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-400">
                    <p className="text-white font-medium">AI & Machine Learning Certification</p>
                    <p>Informatics of AI of Africa, 2024</p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-white font-medium">Coding Education</p>
                    <p>Rwanda Coding Academy, 2023</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl">
                <h3 className="text-white font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="h-6 w-6 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-md flex items-center justify-center">
                    <i className="fas fa-briefcase text-sm"></i>
                  </span>
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-400">
                    <p className="text-white font-medium">Backend Developer</p>
                    <p>Prime Life Insurance, 2025-Present</p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-white font-medium">AI Research Engineer</p>
                    <p>Informatics of AI of Africa, 2024-2025</p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-white font-medium">ML Software Developer</p>
                    <p>Tech Solutions Lab, 2024</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all text-base"
                onClick={() => scrollToSection('contact')}
              >
                GET IN TOUCH
              </Button>
              <a 
                href="/resume.pdf" 
                className="bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white border border-gray-800 hover:border-primary/50 px-6 py-6 rounded-lg font-medium transition-all flex items-center justify-center gap-3 text-base shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl border-2 border-gray-800 shadow-2xl">
              <img 
                src={ProfileImage.src} 
                alt={userInfo.name} 
                className="w-full h-full object-contain bg-gradient-to-br from-gray-900 to-black"
              />
              <div className="absolute inset-0 border-[20px] border-black/40 pointer-events-none"></div>
            </div>
            
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-gray-800 shadow-2xl max-w-[320px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <i className="fas fa-award text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Achievements</h4>
                  <p className="text-gray-400 text-sm">Notable recognition</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <i className="fas fa-check-circle text-primary mt-1"></i>
                  <span>Cyberlympics Competition Winner</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <i className="fas fa-check-circle text-primary mt-1"></i>
                  <span>Africa AI Hackathon Winner 2024</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <i className="fas fa-check-circle text-primary mt-1"></i>
                  <span>ML Research Publications</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
