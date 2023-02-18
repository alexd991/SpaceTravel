import { Component, HostListener } from '@angular/core';
import { BasketService } from './basket/services/basket.service';

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

  @HostListener('mouseup')
  public onMouseUp() {
    const basket = document.querySelector('.basket');
    if (basket)
      this.basketService.toggleBasket();
  }
}
