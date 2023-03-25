import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productService.getOne(productId);
  }
}
