import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/lib/constants';
import { Project } from '@/types';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0 pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-primary font-medium tracking-wider">FEATURED PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 flex flex-col md:flex-row items-center justify-center gap-3">
            <span>My</span> 
            <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">Technical Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my high-performance applications, complex systems, and technical solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Modified to be responsive */}
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
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white bg-gradient-to-r from-gray-900 to-black hover:from-primary/90 hover:to-primary/70 px-8 py-4 rounded-lg font-medium transition-all border border-gray-800 hover:border-primary/50 shadow-lg text-lg"
          >
            <i className="fab fa-github text-xl"></i> View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;