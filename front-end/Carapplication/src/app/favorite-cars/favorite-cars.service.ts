import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FavoriteCar } from './models/favorite-car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCarsService {

  constructor(private http: HttpClient) { }

  getAllFavoriteCarsByUserID(userId: string): Observable<FavoriteCar[]>{
    return this.http.get<FavoriteCar[]>("http://localhost:8762/favoriteCars/user/"+userId , {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
  
  addFavoriteCar(car: FavoriteCar){
    console.log("test");
    return this.http.post<FavoriteCar>("http://localhost:8762/favoriteCars/favoritecar", car, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  deleteFavoriteCar(id: number){
    return this.http.delete<FavoriteCar>("http://localhost:8762/favoriteCars/favoritecar/" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
