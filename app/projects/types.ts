export interface Project {
  title: string;
  image_src: string;
  color: string;
  url: string;
  github_url: string | null;
  role: string;
}

export interface ProjectModal {
  active: boolean;
  index: number;
}
