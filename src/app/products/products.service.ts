import { Injectable } from '@angular/core';

import { Product, productsData } from './productsData';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = productsData;

  constructor() {}

  getAll() {
    return this.products;
  }

  getOne(productId: number) {
    return this.products.find((product) => product.id === productId);
  }
}
