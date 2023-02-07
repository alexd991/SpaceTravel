import { Injectable } from '@angular/core';
import { BasketItem } from '../basket-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _addToBasketSubject = new Subject<BasketItem>();

  constructor() { }

  addItemToBasket(item: BasketItem) {
    this._addToBasketSubject.next(item);
  }

  addToBasket$(): Observable<BasketItem> {
    return this._addToBasketSubject.asObservable();
  }

  // calling api?
}
