export interface Company {
  id: number;
  name: string;
  url: string;
  thumbnailUrl: string;
  teamThumbnailUrl: string;
  title: string;
  from: string;
  to: string;
  responsibilities: string[];
}

export interface Project {
  company: Company;
  type: string;
  name: string;
  description: string;
  technologies: { name: string; url: string; description: string }[];
}
