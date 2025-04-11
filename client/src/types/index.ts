// Project type
export interface Project {
	id: number;
	title: string;
	category: string;
	description: string;
	image: string | any; // Allow both string URLs and imported images
	technologies: string[];
	demoLink: string;
	githubLink: string;
}

// Skill type
export interface Skill {
	name: string;
	percentage: number;
}

// Core Competency type
export interface CoreCompetency {
	title: string;
	description: string;
	icon: string;
	bgColor: string;
	textColor: string;
}

// Form data type
export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}
