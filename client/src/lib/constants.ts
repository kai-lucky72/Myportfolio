import { Project, Skill, CoreCompetency } from '@/types';

// User information and contact details
export const userInfo = {
  name: "Lucky Kagabo",
  email: "kagabolucky72@gmail.com",
  github: "https://github.com/kai-lucky72",
  profileImage: "/images/profile-image.png"
};

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Credora Financial Platform',
    category: 'FinTech',
    description: 'Secure financial platform with advanced authentication, transaction processing, and user-friendly dashboard for managing assets.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/credora.git'
  },
  {
    id: 2,
    title: 'AI Calendar Assistant',
    category: 'AI Tools',
    description: 'Intelligent calendar application that uses machine learning to optimize scheduling, predict meeting durations, and provide smart reminders.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/ai_calendar.git'
  },
  {
    id: 3,
    title: 'Finance Excel Automation',
    category: 'Finance',
    description: 'Automated financial analysis and reporting tool that processes Excel data to generate insights, forecasts, and visualization dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/finance_excel.git'
  },
  {
    id: 4,
    title: 'AUTO-GIT Push Tool',
    category: 'DevOps',
    description: 'Streamlined automation tool for Git operations that simplifies the process of committing and pushing code changes to repositories.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    technologies: ['Shell Script', 'Git', 'Node.js', 'Automation'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/AUTO-GIT-push.git'
  },
  {
    id: 5,
    title: 'Algorithm Visualizer',
    category: 'Education',
    description: 'Interactive educational platform that visualizes various algorithms and data structures to help users understand complex computer science concepts.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop',
    technologies: ['JavaScript', 'React', 'D3.js', 'Algorithms'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/algorithm-visualizer.git'
  },
  {
    id: 6,
    title: 'Tugendane Community Platform',
    category: 'Social',
    description: 'Community engagement platform designed to connect users, facilitate discussions, and promote collaboration within specific interest groups.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: 'https://github.com/kai-lucky72/tugendane.git'
  }
];

// Technical Skills
export const aiSkills: Skill[] = [
  { name: 'Machine Learning', percentage: 88 },
  { name: 'Natural Language Processing', percentage: 85 },
  { name: 'Computer Vision', percentage: 80 },
  { name: 'Data Analysis', percentage: 92 },
  { name: 'TensorFlow/PyTorch', percentage: 83 },
  { name: 'Predictive Modeling', percentage: 87 }
];

// Software Development Skills
export const devSkills: Skill[] = [
  { name: 'JavaScript/TypeScript', percentage: 90 },
  { name: 'Python', percentage: 92 },
  { name: 'React/Next.js', percentage: 85 },
  { name: 'Node.js/Express', percentage: 87 },
  { name: 'SQL/NoSQL Databases', percentage: 83 },
  { name: 'Git/GitHub', percentage: 90 }
];

// Core Competencies
export const coreCompetencies: CoreCompetency[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems with 3+ years of experience in machine learning, participating in the Informatics of AI of Africa program.',
    icon: 'fas fa-brain',
    bgColor: 'bg-primary/20',
    textColor: 'text-primary'
  },
  {
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with modern frameworks, focusing on performance, security, and exceptional user experience.',
    icon: 'fas fa-code',
    bgColor: 'bg-[#0EA5E9]/20',
    textColor: 'text-[#0EA5E9]'
  },
  {
    title: 'Problem Solving',
    description: 'Creating elegant solutions to complex challenges using analytical thinking and innovative approaches to technical problems.',
    icon: 'fas fa-lightbulb',
    bgColor: 'bg-[#8B5CF6]/20',
    textColor: 'text-[#8B5CF6]'
  }
];
