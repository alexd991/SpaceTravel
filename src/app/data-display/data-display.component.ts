import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ICelestialBody } from 'src/app/data-display/models/ICelestialBody';
import { Planet } from 'src/app/data-display/models/Planet';
import { Star } from 'src/app/data-display/models/Star';
import { StarDataService } from 'src/app/data-display/services/star-data.service';
import { BasketItem } from '../basket/basket-item';
import { BasketService } from '../basket/services/basket.service';
import * as X3Dom from 'x3dom';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.less']
})
export class DataDisplayComponent implements OnInit, AfterViewInit {
  celestialBodyData: ICelestialBody[] = [];
  @ViewChild('planetModel') planetModel: ElementRef; 
  x3dHasLoaded: boolean;
  dataHasLoaded: boolean;
  currentlyShowingIndex: number = 0;
  x3d: any;

  constructor(private starDataService: StarDataService,
              private basketService: BasketService,
              private changeDetectorRef: ChangeDetectorRef) { }

  async ngOnInit() {
    this.dataHasLoaded = false;
    this.x3dHasLoaded = false;

    this.x3d = (<any>window).x3dom;
    this.x3dHasLoaded = !!this.x3d;
    console.log(this.x3d);

    await this.starDataService.getAllBodies()
      .subscribe((data: ICelestialBody[]) => {
        data.forEach(body => {
          switch (body.typeId) {
            case 1:
              this.celestialBodyData.push(new Star(
                body.bodyId, body.diameterKm, body.distanceFromEarthAU, body.description
              ));
              break;
            case 2:
              this.celestialBodyData.push(new Planet(
                body.bodyId, body.name, body.diameterKm, body.distanceFromEarthAU, body.description
              ));
              break;
            default:
              break;
          };
        });
        this.dataHasLoaded = this.celestialBodyData.length > 0;
      });
  }

  cycle() {
    this.currentlyShowingIndex++;
    if (this.currentlyShowingIndex >= this.celestialBodyData.length)
      this.currentlyShowingIndex = 0;
  }

  addToBasket(basketItem: BasketItem){
    this.basketService.addItemToBasket(basketItem);
  }

  ngAfterViewInit() {
    if(this.x3d == null)
      this.changeDetectorRef.markForCheck();
    this.x3d.reload();
    console.log(this.x3d.canvases);
  }

  rerenderX3D() {
    if(this.x3d == null)
      this.changeDetectorRef.markForCheck();

    this.x3d.x3dElem.render();
    console.log(this.x3d.x3dElem);
  }

}
