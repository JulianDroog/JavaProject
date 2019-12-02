import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _httpClient: HttpClient) { }

  getAllAds(): Observable<Car[]>{
    return this._httpClient.get<Car[]>("http://localhost:8050/cars");
  }

  getCarById(id : string): Observable<Car>{
    return this._httpClient.get<Car>("http://localhost:8050/cars/car/"+id);
  }
}
