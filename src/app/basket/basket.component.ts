import { Component, OnInit, ViewChild } from '@angular/core';
// import { SelectionModel } from '@angular/cdk/collections';
import { BasketItem } from './basket-item';
import { MatTable } from '@angular/material/table';
import { BasketService } from './services/basket.service';
import { Subscription } from 'rxjs';

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
export class BasketComponent implements OnInit {
  public columnsToDisplay: string[] = ['name', 'price', 'actions'];
  public itemsInBasket: BasketItem[] = [
    new test("Moon",50),
    new test("Venus",80),
    new test("Mercury",80),
    new test("Sun",150),
    new test("Earth",30)
  ];
  public totalPrice: number = 0;
  private _subscriptions = new Subscription();
  
  
  // private allowMultiSelect = true;
  // private initialSelection = [];
  // public selection = new SelectionModel<BasketItem>(this.allowMultiSelect, this.initialSelection);

  @ViewChild('basketTable', {static: false}) table: MatTable<BasketItem>;

  constructor(private basketService: BasketService) {
    this._subscriptions.add(basketService.addToBasket$().subscribe((item: BasketItem) => {
      this.addItemToBasket(item);
    }));
  }

  ngOnInit(): void {
    this.sumBasket();
  }
  
  public addItemToBasket(item: BasketItem): void {
    this.itemsInBasket.push(item);
    this.totalPrice += item.price;
    this.table.renderRows();
  }

  public removeItemFromBasket(item: BasketItem) : void {
    this.itemsInBasket.splice(this.itemsInBasket.indexOf(item), 1);
    this.totalPrice -= item.price;
    this.table.renderRows();
  }

  private sumBasket() : void {
    this.totalPrice = 0;
    this.itemsInBasket.forEach(item => {
      this.totalPrice += item.price;
    });
  }

  public clearBasket() : void {
    this.itemsInBasket = [];
    this.totalPrice = 0;
    this.table.renderRows();
  }
}
