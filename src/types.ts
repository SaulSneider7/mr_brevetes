
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  category: string;
  popular?: boolean;
}

export interface Branch {
  id: number;
  name: string;
  district: string;
  address: string;
  reference: string;
  mapUrl: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
