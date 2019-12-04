import { Component, OnInit } from '@angular/core';
import { FavoriteCar } from '../models/favorite-car.model';
import { FavoriteCarsService } from '../favorite-cars.service';

@Component({
  selector: 'app-favorite-cars',
  templateUrl: './favorite-cars.component.html',
  styleUrls: ['./favorite-cars.component.scss']
})
export class FavoriteCarsComponent implements OnInit {
  favoriteCars : FavoriteCar[] = [];
  favoriteCar: FavoriteCar = null;
  isFavorite:boolean = false;
  favoriteIcon:string = "favorite_border";
  constructor(private _favoriteCarsService: FavoriteCarsService) { 
    this.getAllFavorites();
  }

  ngOnInit() {
  }

  getAllFavorites(){
    this._favoriteCarsService.getAllFavoriteCarsByUserID(localStorage.getItem("id")).subscribe(result => {
      this.favoriteCars = result;
      console.log(result);
    })
  }

}
