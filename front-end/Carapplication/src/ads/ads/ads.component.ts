import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';
import { FavoritesService } from 'src/app/favorite-cars/favorite-car.service';
import { FavoriteCar } from 'src/app/favorite-cars/models/favorite-car.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads : Car[] = [];
  favoriteCar: FavoriteCar = null;
  

  constructor(private _adsService : AdsService, private _favoriteCarSerice: FavoritesService) { 
    this.loadAllAds();
  }

  loadAllAds(){
    this._adsService.getAllAds()
    .subscribe(result => {
      this.ads = result;
    });
  }

  addFavoriteCar(ad: Car){
    this.favoriteCar = new FavoriteCar(ad._id, "", ad.make, ad.model);
    this._favoriteCarSerice.addFavoriteCar(this.favoriteCar);
  }

  ngOnInit() {
  }

}
