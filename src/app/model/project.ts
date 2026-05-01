export interface Project {
  slug: string;
  title: string;
  description: string;

  problem: string;
  solution: string;
  impact?: string;

  role?: string;        
  context?: string;     

  tech: string[];

  image: string;
  video?: string;

  demo?: string;

}