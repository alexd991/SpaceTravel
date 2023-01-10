import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CelestialBody } from '../models/celestial-body';

@Injectable({
  providedIn: 'root'
})
export class StarDataService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://localhost:7208/api/CelestialBody/';

  getAllBodies(): any{
    return this.httpClient.get<CelestialBody[]>(this.apiUrl + 'getAll');
  }
}
