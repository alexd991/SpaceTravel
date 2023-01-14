import { AfterViewInit, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ICelestialBody } from 'src/app/models/celestial-bodies/ICelestialBody';
import { Planet } from 'src/app/models/celestial-bodies/planet';
import { Star } from 'src/app/models/celestial-bodies/star';
import { StarDataService } from 'src/app/services/star-data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.less']
})
export class DataDisplayComponent implements OnInit {
  celestialBodyData: ICelestialBody[] = [];
  dataHasLoaded: boolean;
  currentlyShowingIndex: number = 0;

  constructor(private starDataService: StarDataService) { }

  async ngOnInit() {
    const returned: ICelestialBody[] = await lastValueFrom(this.starDataService.getAllBodies()
      .subscribe((data: ICelestialBody[]) => {
        data.forEach(body => {
          switch (body.typeId) {
            case 1:
              this.celestialBodyData.push(new Star(
                body.bodyId,
                body.diameterKm,
                body.distanceFromEarthAU,
                body.description
              ));
              break;

            case 2:
              this.celestialBodyData.push(new Planet(
                body.bodyId,
                body.name,
                body.diameterKm,
                body.distanceFromEarthAU,
                body.description
              ));
              break;

            default:
              break;
          }
        });
        this.dataHasLoaded = true;
      }));
    if (!returned)
      return;
    // returned.forEach(body => {

    // });
    // this.starDataService.getAllBodies().subscribe((data: ICelestialBody[]) => {
    //   data.forEach(body => {
    //     switch (body.typeId) {
    //       case 1:
    //         this.celestialBodyData.push(new Star(
    //           body.bodyId,
    //           body.diameterKm,
    //           body.distanceFromEarthAU,
    //           body.description
    //         ));
    //         break;

    //         case 2:
    //           this.celestialBodyData.push(new Planet(
    //             body.bodyId,
    //             body.name,
    //             body.diameterKm,
    //             body.distanceFromEarthAU,
    //             body.description
    //           ));
    //           break;

    //       default:
    //         break;
    //     }
    //   });
    //   this.dataHasLoaded = true;
    // });
  }

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     x3dom.reload();
  //   },1000);
  // }

  cycle() {
    this.currentlyShowingIndex++;
    if (this.currentlyShowingIndex >= this.celestialBodyData.length)
      this.currentlyShowingIndex = 0;
  }

}
