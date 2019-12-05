import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { AdsService } from '../../services/ads.service';
import { Car } from '../../models/car.model';


@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  ad : Car = {
    _id: null,
    make: "",
    model: "",
    type: "",
    year: null,
    transmission: "",
    cc: null,
    hp: null,
    doors: null,
    userId: null
  };
  params : Params;

  constructor(private _adsService: AdsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.params = params; 
    });
    this.getAdDetails();
   }

  getAdDetails(){
    this._adsService.getCarById(this.params.id)
    .subscribe(result => {
      this.ad = result;
    });
  }

  ngOnInit() {
  }

}
