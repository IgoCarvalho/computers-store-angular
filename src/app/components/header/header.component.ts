import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchText = '';

  constructor(protected cartService: CartService, private router: Router) {}

  handleSearch() {
    if (this.searchText) {
      this.router.navigate(['/produtos'], {
        queryParams: { descricao: this.searchText },
      });

      return;
    }

    this.router.navigate(['/produtos']);
  }
}
