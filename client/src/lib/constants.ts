import { Project, Skill, CoreCompetency } from '@/types';

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Conversational AI Chatbot',
    category: 'NLP',
    description: 'A context-aware chatbot built with transformer architecture, fine-tuned on domain-specific data for customer support.',
    image: 'https://images.unsplash.com/photo-1677442135100-3545b73ba76a?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 2,
    title: 'Real-time Object Detection',
    category: 'CV',
    description: 'A computer vision system that detects and tracks objects in real-time video streams with high accuracy and low latency.',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CUDA'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Predictive Analytics Dashboard',
    category: 'Data Science',
    description: 'An interactive dashboard that uses machine learning to predict business metrics and visualize trends.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Scikit-learn', 'React', 'D3.js'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 4,
    title: 'Recommendation Engine',
    category: 'ML Systems',
    description: 'A hybrid recommendation system that combines collaborative filtering and content-based approaches.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'AWS', 'Redis'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 5,
    title: 'Generative AI Art Tool',
    category: 'Generative AI',
    description: 'A web application that utilizes GANs and diffusion models to generate high-quality artwork from text prompts.',
    image: 'https://images.unsplash.com/photo-1673187236833-d1f628e9094a?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'PyTorch', 'Next.js', 'WebGL'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 6,
    title: 'Sentiment Analysis API',
    category: 'NLP',
    description: 'A robust API for real-time sentiment analysis of text data, supporting multiple languages and industry-specific contexts.',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'spaCy', 'FastAPI', 'Docker'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  }
];

// AI & ML Skills
export const aiSkills: Skill[] = [
  { name: 'Deep Learning', percentage: 95 },
  { name: 'Natural Language Processing', percentage: 90 },
  { name: 'Computer Vision', percentage: 85 },
  { name: 'Reinforcement Learning', percentage: 80 },
  { name: 'Generative AI', percentage: 85 },
  { name: 'MLOps', percentage: 75 }
];

// Software Development Skills
export const devSkills: Skill[] = [
  { name: 'Python', percentage: 95 },
  { name: 'TensorFlow / PyTorch', percentage: 90 },
  { name: 'JavaScript / React', percentage: 85 },
  { name: 'SQL / NoSQL', percentage: 80 },
  { name: 'Docker / Kubernetes', percentage: 85 },
  { name: 'Cloud Platforms (AWS/GCP/Azure)', percentage: 85 }
];

// Core Competencies
export const coreCompetencies: CoreCompetency[] = [
  {
    title: 'AI Model Development',
    description: 'Expertise in designing, training, and optimizing deep learning models for various applications.',
    icon: 'fas fa-brain',
    bgColor: 'bg-primary/20',
    textColor: 'text-primary'
  },
  {
    title: 'ML Systems Architecture',
    description: 'Designing scalable machine learning systems that can handle large datasets and complex workflows.',
    icon: 'fas fa-cogs',
    bgColor: 'bg-[#0EA5E9]/20',
    textColor: 'text-[#0EA5E9]'
  },
  {
    title: 'AI Product Development',
    description: 'Building end-to-end AI products from concept to deployment, with a focus on user experience.',
    icon: 'fas fa-project-diagram',
    bgColor: 'bg-[#8B5CF6]/20',
    textColor: 'text-[#8B5CF6]'
  }
];
