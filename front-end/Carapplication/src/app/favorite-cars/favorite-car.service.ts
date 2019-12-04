import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoriteCar } from './models/favorite-car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getAllFavoriteCars(): Observable<FavoriteCar[]>{
    return this.http.get<FavoriteCar[]>("http://localhost:8054/favoriteCars");
  }

  // getFavoriteCarById(id : number): Observable<FavoriteCar>{
  //   return this._httpClient.get<FavoriteCar>("http://localhost:8054/favoriteCars/favoriteCar/"+id);
  // } 
  
  addFavoriteCar(car: FavoriteCar){
    return this.http.post<FavoriteCar>("https://localhost:8054/favoriteCar/", car);
  }
}
