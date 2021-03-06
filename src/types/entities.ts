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

export interface DescriptiveImage {
  title: string;
  url: string;
  description?: string;
}

export interface Project {
  company?: Company;
  type: string;
  name: string;
  description: string;
  thumbnails: DescriptiveImage[];
  technologies: DescriptiveImage[];
}
