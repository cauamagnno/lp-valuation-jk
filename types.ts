export interface Testimonial {
  id: number;
  company: string;
  feedback: string;
  tag: string;
  tagColor?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}