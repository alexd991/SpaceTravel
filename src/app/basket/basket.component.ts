import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { SelectionModel } from '@angular/cdk/collections';
import { BasketItem } from './basket-item';
import { MatTable } from '@angular/material/table';
import { BasketService } from './services/basket.service';
import { Subscription, delay } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit, AfterViewInit, OnDestroy {
  public columnsToDisplay: string[] = ['name', 'price', 'actions'];
  public itemsInBasket: BasketItem[] = [];
  public totalPrice: number = 0;
  private _subscriptions = new Subscription();
  
  
  // private allowMultiSelect = true;
  // private initialSelection = [];
  // public selection = new SelectionModel<BasketItem>(this.allowMultiSelect, this.initialSelection);

  @ViewChild('basketTable', {static: false}) table: MatTable<BasketItem>;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.itemsInBasket = this.basketService.basketItems;
    this.sumBasket();
  }
  
  public addItemToBasket(item: BasketItem): void {
    this.itemsInBasket.push(item);
    this.totalPrice += item.price;
    this.basketService.setBasketInStorage(this.itemsInBasket);
    this.table.renderRows();
  }

  public removeItemFromBasket(item: BasketItem) : void {
    this.itemsInBasket.splice(this.itemsInBasket.indexOf(item), 1);
    this.totalPrice -= item.price;
    this.basketService.setBasketInStorage(this.itemsInBasket);
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
    this.basketService.clearBasketInStorage();
  }

  ngAfterViewInit(): void {
    this._subscriptions.add(this.basketService.addToBasket$()
    .pipe(
      delay(0)
    )
    .subscribe((item: BasketItem) => {
      this.addItemToBasket(item);
    }));
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
