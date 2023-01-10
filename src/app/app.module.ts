import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { StarDataService } from './services/star-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    StarDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
