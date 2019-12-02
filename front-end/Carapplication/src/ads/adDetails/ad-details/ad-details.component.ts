import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/ads/services/ads.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from 'src/ads/models/car.model';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  ad : Car = null;
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
