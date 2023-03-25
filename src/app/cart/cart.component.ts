import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartItem, CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAll();
    this.calculateTotalPrice();
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.item.id !== itemId
    );
    this.cartService.remove(itemId);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    const totalPrice = this.cartItems.reduce(
      (totalPrice, cartItem) =>
        cartItem.item.price * cartItem.quantity + totalPrice,
      0
    );

    this.totalPrice = totalPrice;
  }

  buyItems() {
    alert('Parabéns, você finalizou sua compra!');
    this.cartService.clear();
    this.router.navigate(['/']);
  }
}
