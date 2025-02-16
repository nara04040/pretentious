export interface SizeGuide {
  size: string;
  chest: number;
  shoulder: number;
  length: number;
  sleeve: number;
}

export interface SizeStock {
  size: string;
  quantity: number;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  sizes: string[];
  selectedSize?: string;
  sizeGuide: SizeGuide[];
  stock: SizeStock[];
} 