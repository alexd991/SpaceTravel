import { Component, OnInit } from '@angular/core';
import { CelestialBody } from 'src/app/models/celestial-body';
import { StarDataService } from 'src/app/services/star-data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.less']
})
export class DataDisplayComponent implements OnInit {
  starData: CelestialBody[];

  constructor(private starDataService: StarDataService) {}

  ngOnInit(): void {
    this.starDataService.getAllBodies().subscribe((data: CelestialBody[]) => {
      this.starData = data;
    });
  }
}
