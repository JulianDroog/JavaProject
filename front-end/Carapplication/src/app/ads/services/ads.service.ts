import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _httpClient: HttpClient) { }

  getAllAds(): Observable<Car[]>{
    return this._httpClient.get<Car[]>("http://localhost:8762/cars", {
    headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getMyAds(userID: number): Observable<Car[]>{
    return this._httpClient.get<Car[]>("http://localhost:8762/cars/user/"+userID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))});
  } 

  getCarById(id : string): Observable<Car>{
    return this._httpClient.get<Car>("http://localhost:8762/cars/car/"+id , {
    headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  deleteAd(id : string){
    return this._httpClient.delete("http://localhost:8762/cars/car/"+id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  putAd(ad: Car){
    return this._httpClient.put("http://localhost:8762/cars/car", ad, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  postAd(ad: Car){
    return this._httpClient.post("http://localhost:8762/cars/car", ad, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
