export interface Film {
  id: number;
  title: string;
  year: number;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}