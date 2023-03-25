import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/productsData';

export interface CartItem {
  item: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = '@ComputerStore:cart';
  private items: CartItem[];

  constructor() {
    this.items = this.getFromStorage();
  }

  private saveToStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  private getFromStorage() {
    const storedItems: CartItem[] = JSON.parse(
      localStorage.getItem(this.cartKey) || '[]'
    );

    return storedItems;
  }

  private clearStorage() {
    localStorage.removeItem(this.cartKey);
  }

  add(item: CartItem) {
    this.items.push(item);
    this.saveToStorage();
  }

  clear() {
    this.items = [];
    this.clearStorage();
  }

  total() {
    return this.items.length;
  }

  getAll() {
    return this.items;
  }

  remove(itemId: number) {
    const filteredItems = this.items.filter(cartItem => cartItem.item.id !== itemId)

    this.items = filteredItems;
    this.saveToStorage();
  }
}
