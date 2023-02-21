import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BasketService } from './basket/services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SpaceTravel';

  @ViewChild('navbar', {static: true, read: ElementRef}) navbar: ElementRef;
  @ViewChild('basket', {static: false, read: ElementRef}) basket: ElementRef;

  constructor(private basketService: BasketService) {}

  public get showBasket(): boolean {
    return this.basketService.basketVisible;
  }

  @HostListener('document:mouseup', ['$event.target'])
  onMouseUp(clickedElement: HTMLElement) {
    if(this.basket == null)
      return;

    if(this.basket.nativeElement.contains(clickedElement) || this.navbar.nativeElement.querySelector('.basket').contains(clickedElement))
      return;

    this.basketService.toggleBasket(false);
  }
}
