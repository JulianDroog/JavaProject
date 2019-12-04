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

  userID : number = Number(localStorage.getItem('id'));

  ads : Car[] = [];
  nAd : Car = {
    _id: null,
    make: "",
    model: "",
    type: "",
    year: null,
    transmission: "",
    cc: null,
    hp: null,
    doors: null,
    userId: this.userID
  }

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

  getAdDetails(id){
    this._adsService.getCarById(id)
    .subscribe(result => {
      this.nAd = result;
    });
  }

  setModal(id){
    if(id=='0'){
      this.title = "New ad";
      this.nAd = {
        _id: null,
        make: "",
        model: "",
        type: "",
        year: null,
        transmission: "",
        cc: null,
        hp: null,
        doors: null,
        userId: this.userID
      }
    }
    else{
      this.title = "Update ad";
      this.getAdDetails(id);
    }
  }

  checkSave(id){
    //post
    if(id == null){
      this._adsService.postAd(this.nAd)
      .subscribe(result => {
        this.loadMyAds();
      });
    }
    //put
    else{
      this._adsService.putAd(this.nAd)
      .subscribe(result => {
        this.loadMyAds();
      });
    }
  }

  ngOnInit() {
  }

}
