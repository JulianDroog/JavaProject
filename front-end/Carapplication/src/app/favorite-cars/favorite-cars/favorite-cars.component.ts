import { Component, OnInit } from '@angular/core';
import { FavoriteCar } from '../models/favorite-car.model';
import { FavoriteCarsService } from '../favorite-cars.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite-cars',
  templateUrl: './favorite-cars.component.html',
  styleUrls: ['./favorite-cars.component.scss']
})
export class FavoriteCarsComponent implements OnInit {
  favoriteCars : FavoriteCar[] = [];
  favoriteCar: FavoriteCar = null;
  isFavorite:boolean = false;
  faHeart = faHeart;
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

  deleteFavoriteCar(favoriteCar: FavoriteCar){
    this._favoriteCarsService.deleteFavoriteCar(favoriteCar.id).subscribe(result => {
      
      console.log(result);
    });
    const index: number = this.favoriteCars.indexOf(favoriteCar);
    if (index !== -1) {
      this.favoriteCars.splice(index, 1);
    }
  }

}
