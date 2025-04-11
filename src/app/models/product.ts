export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  kaspiLink: string;
  categoryId: number;
  likes: number;
  liked: boolean;
} 