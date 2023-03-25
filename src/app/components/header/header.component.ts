import { Component } from '@angular/core';

import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(protected cartService: CartService) {}
}
