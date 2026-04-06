export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: ProjectImage[];  
  features?: string[];
}

export interface ProjectImage {
  src: string;
  description: string;
}