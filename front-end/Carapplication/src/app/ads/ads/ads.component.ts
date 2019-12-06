import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';
import { FavoriteCarsService } from 'src/app/favorite-cars/favorite-cars.service';
import { FavoriteCar } from 'src/app/favorite-cars/models/favorite-car.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads : Car[] = [];
  favoriteCar: FavoriteCar = null;
  faHeart = faHeart;
  isButtonFavoriteVisible:boolean = true;
  loggedIn : boolean;

  constructor(private _adsService : AdsService, private _favoriteCarSerice: FavoriteCarsService, private _authService: AuthenticateService, private router: Router) { 
    this._authService.isLoggedin.subscribe(result => {
      this.loggedIn = result;
      this.loadAllAds();
    })
  }

  loadAllAds(){
    this._adsService.getAllAds()
    .subscribe(result => {
      this.ads = result;
    });
  }

  addFavoriteCar(ad: Car){
    var userId = localStorage.getItem("id");
    this.favoriteCar = new FavoriteCar(ad._id, userId, ad.make, ad.model, ad.type, ad.year);
    this._favoriteCarSerice.addFavoriteCar(this.favoriteCar).subscribe(result => {
      console.log(result);
    });
    this.isButtonFavoriteVisible = false;
    this.router.navigate(['/favorites']);
  }

  

  ngOnInit() {
  }

}
