export interface Product {
  id: number;
  description: string;
  price: number;
  priceDescription: string;
  image: string;
  discount?: number;
  stockQuantity: number;
}

export const productsData: Product[] = [
  {
    id: 1,
    description: 'Mouse gamer',
    price: 439.0,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/mouse-3.jpg',
    stockQuantity: 10,
  },
  {
    id: 2,
    description: 'Monitor muito bom',
    price: 1200.5,
    priceDescription: 'À vista no PIX',
    discount: 2000.0,
    image: '/assets/images/monitor-1.jpg',
    stockQuantity: 10,
  },
  {
    id: 3,
    description: 'Teclado excelente',
    price: 749.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/teclado-1.jpeg',
    stockQuantity: 10,
  },
  {
    id: 4,
    description: 'Fone para quem joga FPS',
    price: 599.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/fone-de-ouvido-2.png',
    stockQuantity: 10,
  },
  {
    id: 5,
    description: 'Fone de ouvido',
    price: 299.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/fone-de-ouvido-1.webp',
    stockQuantity: 10,
  },
  {
    id: 6,
    description: 'Fone de ouvido bom',
    price: 399.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/fone-de-ouvido-3.jpg',
    stockQuantity: 10,
  },
  {
    id: 7,
    description: 'HD 1TB',
    price: 499.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/hd.jpg',
    stockQuantity: 10,
  },
  {
    id: 8,
    description: 'Combo de placa de vídeos',
    price: 18449.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/placa-video.jpg',
    stockQuantity: 10,
  },
  {
    id: 9,
    description: 'Processador Ryzen',
    price: 1000,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/processador.jpg',
    stockQuantity: 10,
  },
  {
    id: 10,
    description: 'Notebook bom',
    price: 2500,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/laptop-1.jpg',
    stockQuantity: 10,
  },
  {
    id: 11,
    description: 'Notebook excelente',
    price: 4500,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/laptop-2.jpg',
    stockQuantity: 10,
  },
  {
    id: 12,
    description: 'Mouse barato',
    price: 20,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/mouse-1.webp',
    stockQuantity: 10,
  },
  {
    id: 13,
    description: 'Mouse ótimo',
    price: 200,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/mouse-2.webp',
    stockQuantity: 10,
  },
  {
    id: 14,
    description: 'Mouse pequeno',
    price: 50,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/mouse-4.webp',
    stockQuantity: 10,
  },
  {
    id: 15,
    description: 'Teclado bom',
    price: 159.99,
    priceDescription: 'À vista no PIX',
    image: '/assets/images/teclado-2.webp',
    stockQuantity: 10,
  },
];
