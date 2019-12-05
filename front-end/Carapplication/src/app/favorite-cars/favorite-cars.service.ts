import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoriteCar } from './models/favorite-car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCarsService {

  constructor(private http: HttpClient) { }

  getAllFavoriteCarsByUserID(userId: string): Observable<FavoriteCar[]>{
    return this.http.get<FavoriteCar[]>("http://localhost:8050/favoriteCars/user/"+userId);
  }
  
  addFavoriteCar(car: FavoriteCar){
    return this.http.post<FavoriteCar>("http://localhost:8054/favoriteCars", car);
  }

  deleteFavoriteCar(id: number){
    return this.http.delete<FavoriteCar>("http://localhost:8054/favoriteCars/favoriteCar/" + id);
  }
}
