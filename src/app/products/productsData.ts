export interface Product {
    id: number;
    description: string;
    price: number;
    priceDescription: string;
    image: string;
    discount?: number;
}

export const productsData: Product[] = [
    { id: 1,description: "Mouse gamer", price: 439.00, priceDescription: "À vista no PIX", image: "/assets/images/mouse-3.jpg" },
    { id: 2,description: "Monitor muito bom", price: 1200.50, priceDescription: "À vista no PIX", discount: 2000.00, image: "/assets/images/monitor-1.jpg" },
    { id: 3,description: "Teclado excelente", price: 749.99, priceDescription: "À vista no PIX", image: "/assets/images/teclado-1.jpeg" },
    { id: 4,description: "Fone para quem joga FPS", price: 599.99, priceDescription: "À vista no PIX", image: "/assets/images/fone-de-ouvido-2.png" },
    { id: 5,description: "Fone de ouvido", price: 299.99, priceDescription: "À vista no PIX", image: "/assets/images/fone-de-ouvido-1.webp" },
    { id: 6,description: "Fone de ouvido bom", price: 399.99, priceDescription: "À vista no PIX", image: "/assets/images/fone-de-ouvido-3.jpg" },
    { id: 7,description: "HD 1TB", price: 499.99, priceDescription: "À vista no PIX", image: "/assets/images/hd.jpg" },
    { id: 8,description: "Combo de placa de vídeos", price: 18449.99, priceDescription: "À vista no PIX", image: "/assets/images/placa-video.jpg" },
    { id: 9,description: "Processador Ryzen", price: 1000, priceDescription: "À vista no PIX", image: "/assets/images/processador.jpg" },
    { id: 10,description: "Notebook bom", price: 2500, priceDescription: "À vista no PIX", image: "/assets/images/laptop-1.jpg" },
    { id: 11,description: "Notebook excelente", price: 4500, priceDescription: "À vista no PIX", image: "/assets/images/laptop-2.jpg" },
    { id: 12,description: "Mouse barato", price: 20, priceDescription: "À vista no PIX", image: "/assets/images/mouse-1.webp" },
    { id: 13,description: "Mouse ótimo", price: 200, priceDescription: "À vista no PIX", image: "/assets/images/mouse-2.webp" },
    { id: 14,description: "Mouse pequeno", price: 50, priceDescription: "À vista no PIX", image: "/assets/images/mouse-4.webp" },
    { id: 15,description: "Teclado bom", price: 159.99, priceDescription: "À vista no PIX", image: "/assets/images/teclado-2.webp" },
]
