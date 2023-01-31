import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { StarDataService } from './services/star-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'data-display', component: DataDisplayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    NavbarComponent,
    HomepageComponent,
    BasketComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [ 
    StarDataService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
