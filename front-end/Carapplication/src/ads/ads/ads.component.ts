import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';
import { FavoriteCarsService } from 'src/app/favorite-cars/favorite-cars.service';
import { FavoriteCar } from 'src/app/favorite-cars/models/favorite-car.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads : Car[] = [];
  favoriteCar: FavoriteCar = null;
  faHeart = faHeart;
  isFavorite:boolean = false;
  favoriteIcon:string = "favorite_border";
  

  constructor(private _adsService : AdsService, private _favoriteCarSerice: FavoriteCarsService) { 
    this.loadAllAds();
  }

  loadAllAds(){
    this._adsService.getAllAds()
    .subscribe(result => {
      this.ads = result;
    });
  }

  addFavoriteCar(ad: Car){
    this.favoriteCar = new FavoriteCar(ad._id, localStorage.getItem("userId"), ad.make, ad.model);
    this._favoriteCarSerice.addFavoriteCar(this.favoriteCar);
  }

  toggleIcon(){
      this.isFavorite = !this.isFavorite;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.isFavorite){
        this.favoriteIcon = "favorite";
      }  
      else{
        this.favoriteIcon = "favorite_border";
      }
  }

  ngOnInit() {
  }

}
