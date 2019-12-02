import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import {MatCardModule} from '@angular/material/card';
import { AdDetailsComponent } from './adDetails/ad-details/ad-details.component';


@NgModule({
  declarations: [AdsComponent, AdDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AdsModule { }
