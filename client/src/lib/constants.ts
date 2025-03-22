import { Project, Skill, CoreCompetency } from '@/types';

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Advanced E-Commerce Platform',
    category: 'Full Stack',
    description: 'High-performance e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 2,
    title: 'Cybersecurity Monitoring System',
    category: 'Security',
    description: 'Robust security platform for real-time threat detection, vulnerability scanning, and automated incident response.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Rust', 'Elasticsearch', 'Docker'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Cloud-Native Microservices Architecture',
    category: 'Backend',
    description: 'Scalable microservices system with service discovery, load balancing, and fault tolerance built on Kubernetes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    technologies: ['Go', 'Kubernetes', 'gRPC', 'Prometheus'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 4,
    title: 'High-Frequency Trading Engine',
    category: 'FinTech',
    description: 'Ultra-low latency trading system capable of executing thousands of transactions per second with advanced analytics.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    technologies: ['C++', 'CUDA', 'Redis', 'React'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 5,
    title: 'Blockchain Smart Contract Platform',
    category: 'Web3',
    description: 'Decentralized application platform with custom smart contract development, wallet integration, and transaction monitoring.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  },
  {
    id: 6,
    title: 'Real-Time Data Processing Pipeline',
    category: 'Big Data',
    description: 'High-throughput data streaming architecture for processing millions of events per second with minimal latency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    technologies: ['Apache Kafka', 'Spark', 'Flink', 'AWS'],
    demoLink: '#',
    githubLink: 'https://github.com/'
  }
];

// Technical Skills
export const aiSkills: Skill[] = [
  { name: 'System Architecture', percentage: 95 },
  { name: 'Cloud Infrastructure', percentage: 90 },
  { name: 'Cybersecurity', percentage: 88 },
  { name: 'Performance Optimization', percentage: 85 },
  { name: 'DevOps & CI/CD', percentage: 92 },
  { name: 'Distributed Systems', percentage: 86 }
];

// Software Development Skills
export const devSkills: Skill[] = [
  { name: 'JavaScript/TypeScript', percentage: 95 },
  { name: 'React/Next.js', percentage: 92 },
  { name: 'Node.js/Express', percentage: 90 },
  { name: 'Go/Rust', percentage: 85 },
  { name: 'SQL/NoSQL Databases', percentage: 88 },
  { name: 'Docker/Kubernetes', percentage: 86 }
];

// Core Competencies
export const coreCompetencies: CoreCompetency[] = [
  {
    title: 'System Architecture',
    description: 'Designing high-performance, scalable systems that can handle extreme workloads and complex requirements.',
    icon: 'fas fa-server',
    bgColor: 'bg-primary/20',
    textColor: 'text-primary'
  },
  {
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with modern frameworks, focusing on performance, security, and user experience.',
    icon: 'fas fa-code',
    bgColor: 'bg-[#0EA5E9]/20',
    textColor: 'text-[#0EA5E9]'
  },
  {
    title: 'Technical Leadership',
    description: 'Leading engineering teams, establishing best practices, and delivering complex projects on time and under budget.',
    icon: 'fas fa-users-cog',
    bgColor: 'bg-[#8B5CF6]/20',
    textColor: 'text-[#8B5CF6]'
  }
];
