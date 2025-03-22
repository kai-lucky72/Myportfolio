import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-[#8B5CF6] font-medium">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-6">
              AI Engineer with a passion for solving complex problems
            </h2>
            <p className="text-gray-300 mb-4">
              I'm a skilled AI engineer with over 5 years of experience developing innovative machine learning solutions across various domains. My expertise lies in creating intelligent systems that leverage state-of-the-art AI techniques to solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6">
              I've successfully delivered projects ranging from computer vision applications to natural language processing systems. My approach combines strong technical skills with a deep understanding of business requirements, ensuring that AI solutions deliver tangible value.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white font-heading font-bold text-lg mb-3">Education</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">
                    <p className="text-white">MS in Artificial Intelligence</p>
                    <p>Stanford University, 2018</p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-white">BS in Computer Science</p>
                    <p>MIT, 2016</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-heading font-bold text-lg mb-3">Experience</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400">
                    <p className="text-white">Senior AI Engineer</p>
                    <p>Tech Innovations Inc., 2020-Present</p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-white">ML Research Scientist</p>
                    <p>AI Solutions Lab, 2018-2020</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
              <a 
                href="/resume.pdf" 
                className="bg-transparent text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download Resume
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
            <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-[#111827] p-4 rounded-xl border border-gray-700 shadow-xl max-w-[280px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-award text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium">Achievements</h4>
                  <p className="text-gray-400 text-sm">Recent recognition</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <i className="fas fa-check-circle text-[#8B5CF6]"></i>
                  <span>Best AI Paper Award - 2022</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <i className="fas fa-check-circle text-[#8B5CF6]"></i>
                  <span>Global AI Hackathon Winner</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <i className="fas fa-check-circle text-[#8B5CF6]"></i>
                  <span>3 Patents in ML Technologies</span>
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
