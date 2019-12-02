import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads : Car[] = [];

  constructor(private _adsService : AdsService) { 
    this.loadAllAds();
  }

  loadAllAds(){
    this._adsService.getAllAds()
    .subscribe(result => {
      this.ads = result;
      console.log(result);
    })

  }

  ngOnInit() {
  }

}
