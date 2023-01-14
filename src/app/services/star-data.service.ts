import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICelestialBody } from '../models/celestial-bodies/ICelestialBody';

@Injectable({
  providedIn: 'root'
})
export class StarDataService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://localhost:7208/api/CelestialBody/';

  getAllBodies(): any{
    return this.makeGetRequest(this.apiUrl + 'getAll');
  }

  getById(bodyId: number): any {
    return this.makeGetRequest(this.apiUrl + `getById/${bodyId}`);

  }

  getAllPlanets(): any {
    return this.makeGetRequest(this.apiUrl + 'getByParentId/1');
  }

  makeGetRequest(url: string){
    return this.httpClient.get<ICelestialBody[]>(url);
  }
}
