import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';
import { faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {

  ads : Car[] = [];
  userID : number = Number(localStorage.getItem('id'));
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch;

  constructor(private _adsService : AdsService) {
    this.loadMyAds();
  }

  loadMyAds(){
    this._adsService.getMyAds(this.userID)
    .subscribe(result => {
      this.ads = result;
    });
  }

  deleteAd(id: string){
    this._adsService.deleteAd(id).subscribe();
    this.loadMyAds();
  }

  ngOnInit() {
  }

}
