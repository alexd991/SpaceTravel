import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICelestialBody } from '../models/ICelestialBody';

@Injectable({
  providedIn: 'root'
})
export class StarDataService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://space-travel-api.azurewebsites.net/api/celestialbody/';

  getAllBodies(){
    return this.makeGetRequest(this.apiUrl + 'getAll');
  }

  getById(bodyId: number){
    return this.makeGetRequest(this.apiUrl + `getById/${bodyId}`);

  }

  getAllPlanets(){
    return this.makeGetRequest(this.apiUrl + 'getByParentId/1');
  }

  makeGetRequest(url: string) : any{
    return this.httpClient.get<ICelestialBody[]>(url);
  }
}
