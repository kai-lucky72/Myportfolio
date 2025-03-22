import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card-gradient rounded-xl overflow-hidden card-hover border border-gray-700 h-full flex flex-col">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-heading font-bold text-white">{project.title}</h3>
          <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.category}</span>
        </div>
        <p className="text-gray-400 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={project.demoLink} className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors font-medium">
            View Project <i className="fas fa-arrow-right ml-1"></i>
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
