import { Injectable } from '@angular/core';
import { BasketItem } from '../basket-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _addToBasketSubject = new Subject<BasketItem>();
  public basketItems: BasketItem[];

  constructor() {
    this.basketItems = this.getBasketFromStorage();
  }

  private getBasketFromStorage(): BasketItem[] {
    const storageBasket = localStorage.getItem('basket');
    return storageBasket ? JSON.parse(storageBasket) : [];
  }

  setBasketInStorage(basket: BasketItem[]): void {
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  clearBasketInStorage() : void {
    localStorage.removeItem('basketItems');
  }

  addItemToBasket(item: BasketItem) {
    this._addToBasketSubject.next(item);
  }

  addToBasket$(): Observable<BasketItem> {
    return this._addToBasketSubject.asObservable();
  }
}
