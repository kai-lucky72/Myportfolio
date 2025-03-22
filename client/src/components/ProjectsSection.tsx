import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/lib/constants';
import { Project } from '@/types';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#8B5CF6] font-medium">SHOWCASING MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">AI Projects & Case Studies</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my most significant AI and machine learning projects, demonstrating my technical expertise and problem-solving abilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-[#1E293B] hover:bg-[#334155] px-6 py-3 rounded-lg font-medium transition-all border border-gray-700"
          >
            <i className="fab fa-github"></i> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
