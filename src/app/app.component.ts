import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from './basket/services/basket.service';
import { BasketItem } from './basket/basket-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SpaceTravel';

  constructor(private basketService: BasketService) {}

  toggleBasket() {
    this.basketService.toggleBasket();
  }

  public get showBasket(): boolean {
    return this.basketService.basketVisible;
  }
}
