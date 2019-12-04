import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';
import { faEdit, faTrashAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

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
  faPlus = faPlus;

  title : string = null;

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
    this._adsService.deleteAd(id)
    .subscribe(result => {
      this.loadMyAds();
    });
  }

  setModal(id){
    if(id=='0'){
      this.title = "New";
    }
    else{
      this.title = "Update";
    }
  }

  ngOnInit() {
  }

}
