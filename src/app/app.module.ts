import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { StarDataService } from './data-display/services/star-data.service';
import { BasketService } from './basket/services/basket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-display', pathMatch: 'full'},
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
    MatIconModule,
    MatTableModule,
    MatSidenavModule
  ],
  providers: [ 
    StarDataService,
    BasketService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
