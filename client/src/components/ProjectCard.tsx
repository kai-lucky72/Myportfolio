import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col bg-black/40 backdrop-blur-sm shadow-xl">
      <div className="h-56 overflow-hidden relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-sm font-bold text-white uppercase tracking-wider">{project.category}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </div>
        <p className="text-gray-400 mb-5 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge text-xs text-white px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-800">
          <a 
            href={project.demoLink} 
            className="text-white hover:text-primary transition-colors font-medium flex items-center gap-2 group"
          >
            View Demo 
            <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-800 hover:bg-primary/20 hover:text-primary text-gray-400 p-2 rounded-full transition-colors"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
