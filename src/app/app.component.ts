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
  @Input() showBasket: boolean = false;
  private _subscriptions = new Subscription();

  constructor(private basketService: BasketService) {
    
  }
}
