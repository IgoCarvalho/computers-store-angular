import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './products.service';
import { Product } from './productsData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const products = this.productsService.getAll();

    this.route.queryParamMap.subscribe((params) => {
      const productQuery = params.get('descricao')?.toLocaleLowerCase();

      if (productQuery) {
        this.products = products.filter((product) =>
          product.description.toLowerCase().includes(productQuery)
        );

        return;
      }

      this.products = products;
    });
  }
}
