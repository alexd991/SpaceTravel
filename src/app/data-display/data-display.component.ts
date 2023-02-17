import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ICelestialBody } from 'src/app/data-display/models/ICelestialBody';
import { Planet } from 'src/app/data-display/models/Planet';
import { Star } from 'src/app/data-display/models/Star';
import { StarDataService } from 'src/app/data-display/services/star-data.service';
import { BasketItem } from '../basket/basket-item';
import { BasketService } from '../basket/services/basket.service';
import { X3DService } from './services/x3d.service';
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

  constructor(private starDataService: StarDataService,
              private basketService: BasketService,
              private x3dService: X3DService) { }

  async ngOnInit() {
    this.dataHasLoaded = false;
    this.x3dHasLoaded = this.x3dService.x3dHasLoaded;
    console.log(this.x3dHasLoaded);

    await this.starDataService.getAllBodies()
      .subscribe((data: ICelestialBody[]) => {
        data.forEach(body => {
          switch (body.typeId) {
            case 1:
              this.celestialBodyData.push(new Star(body.bodyId, body.diameterKm, 
                body.distanceFromEarthAU, body.description));
              break;
            case 2:
              this.celestialBodyData.push(new Planet(body.bodyId, body.name, body.diameterKm, 
                body.distanceFromEarthAU, body.description));
              break;
            default:
              break;
          };
        });
        this.dataHasLoaded = this.celestialBodyData.length > 0;
        console.log("dataHasLoaded: ", this.dataHasLoaded);
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
    if(!this.x3dService.x3dHasCanvases)
      this.x3dService.reloadX3D();
  }

  rerenderX3D() {
    this.x3dService.reloadX3D();
  }

}
