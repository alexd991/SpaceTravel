import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  @Output() shouldShowBasket = new EventEmitter<boolean>();
  private showBasket: boolean = false;

  toggleBasket() {
    this.showBasket = !this.showBasket;
    this.shouldShowBasket.emit(this.showBasket);
  }
}
