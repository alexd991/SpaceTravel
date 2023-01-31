import { Component } from '@angular/core';
import { BasketItem } from './basket-item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {
  public itemsInBasket: BasketItem[] = [];
  
  public addItemToBasket(item: BasketItem): void {
    this.itemsInBasket.push(item);
  }

  public removeItemFromBasket(item: BasketItem) : void {
    this.itemsInBasket.splice(this.itemsInBasket.indexOf(item), 1);
  }
}
