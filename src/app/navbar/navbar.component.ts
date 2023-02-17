import { Component } from '@angular/core';
import { BasketService } from '../basket/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent{
  constructor(private basketService: BasketService) {}

  toggleBasket() {
    this.basketService.toggleBasket();
  }
}
