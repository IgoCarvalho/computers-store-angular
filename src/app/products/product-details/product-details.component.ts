import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/cart/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from '../products.service';
import { Product } from '../productsData';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private router: ActivatedRoute,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productService.getOne(productId);
  }

  addToCart() {
    if (this.product) {
      this.cartService.add({
        item: this.product,
        quantity: this.quantity,
      });

      this.notificationService.show('O produto foi adicionado ao carrinho!')
    }
  }
}
