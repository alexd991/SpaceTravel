import { Component } from '@angular/core';
import { BasketItem } from './basket-item';

class test implements BasketItem {
  name: string = "test";
  price: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {
  public itemsInBasket: BasketItem[] = [
    new test("mercury",100),
    new test("mars",85),
    new test("moon",69),
    new test("sun",420),

  ];
  public totalPrice: number = 0;
  
  public addItemToBasket(item: BasketItem): void {
    this.itemsInBasket.push(item);
    this.totalPrice += item.price;
  }

  public removeItemFromBasket(item: BasketItem) : void {
    this.itemsInBasket.splice(this.itemsInBasket.indexOf(item), 1);
    this.totalPrice -= item.price;
  }

  public clearBasket() : void {
    this.itemsInBasket = [];
    this.totalPrice = 0;
  }
}
