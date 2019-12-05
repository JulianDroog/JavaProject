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

  getMyAds(userID: number): Observable<Car[]>{
    return this._httpClient.get<Car[]>("http://localhost:8050/cars/user/"+userID);
  } 

  getCarById(id : string): Observable<Car>{
    return this._httpClient.get<Car>("http://localhost:8050/cars/car/"+id);
  }

  deleteAd(id : string){
    return this._httpClient.delete("http://localhost:8050/cars/car/"+id);
  }

  putAd(ad: Car){
    return this._httpClient.put("http://localhost:8050/cars/car", ad);
  }

  postAd(ad: Car){
    return this._httpClient.post("http://localhost:8050/cars/car", ad);
  }
}
